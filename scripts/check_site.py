"""Check the static site's references before publishing. No dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re

ROOT = Path(__file__).resolve().parents[1]

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.references = []
        self.errors = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                self.errors.append(f"Duplicate ID: {attrs['id']}")
            self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if attrs.get(key):
                self.references.append(attrs[key])

def main():
    doc = Document()
    source = (ROOT / 'index.html').read_text()
    doc.feed(source)
    for reference in doc.references:
        url = urlsplit(reference)
        if url.scheme or url.netloc:
            continue
        if url.path.startswith('/'):
            doc.errors.append(f'Root-relative path breaks project hosting: {reference}')
        if url.path and not (ROOT / unquote(url.path)).is_file():
            doc.errors.append(f'Missing local file: {reference}')
        if not url.path and url.fragment and unquote(url.fragment) not in doc.ids:
            doc.errors.append(f'Missing anchor: {reference}')
    script = (ROOT / 'app.js').read_text()
    for element_id in re.findall(r"getElementById\('([^']+)'\)", script):
        if element_id not in doc.ids:
            doc.errors.append(f'JavaScript references missing element: {element_id}')
    for section in ('research','attention','sc26','resources','roadmap','team'):
        if section not in doc.ids:
            doc.errors.append(f'Missing required section: {section}')
    if doc.errors:
        raise SystemExit('\n'.join(doc.errors))
    print(f'PASS: {len(doc.references)} references, {len(doc.ids)} unique IDs, and interactive element targets.')

if __name__ == '__main__':
    main()

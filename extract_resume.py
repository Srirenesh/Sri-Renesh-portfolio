from pypdf import PdfReader
path=r'd:\Sri Renesh portfolio\SRI RENESH_ (1).pdf'
reader=PdfReader(path)
text='\n'.join(page.extract_text() or '' for page in reader.pages)
print(text)

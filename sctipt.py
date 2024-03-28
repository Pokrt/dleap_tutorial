import os
from PyPDF2 import PdfMerger
import subprocess

def convert_markdown_to_pdf(input_file, output_file):
    # Convert markdown to PDF using pandoc
    subprocess.run(['pandoc', input_file, '-o', output_file], check=True)

def merge_pdfs(pdf_files, output_file):
    merger = PdfMerger()
    for pdf in pdf_files:
        merger.append(pdf)
    merger.write(output_file)
    merger.close()

def convert_and_merge_markdown_folder(input_folder, output_pdf):
    temp_pdfs = []  # List to keep track of temporary PDF files
    for md_file in os.listdir(input_folder):
        if md_file.endswith('.md'):
            pdf_file = md_file.replace('.md', '.pdf')
            pdf_file_path = os.path.join(input_folder, pdf_file)
            md_file_path = os.path.join(input_folder, md_file)
            print(f'Converting {md_file} to {pdf_file}')
            convert_markdown_to_pdf(md_file_path, pdf_file_path)
            temp_pdfs.append(pdf_file_path)
    
    merge_pdfs(temp_pdfs, output_pdf)
    
    # Optionally, remove the temporary PDF files
    for pdf_file in temp_pdfs:
        os.remove(pdf_file)

# Usage
input_folder = '.'
output_pdf = './output/output.pdf'
convert_and_merge_markdown_folder(input_folder, output_pdf)

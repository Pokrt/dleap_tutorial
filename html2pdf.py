import os
import pdfkit

def find_html_files(directory):
    """
    Recursively find all HTML files in the given directory.
    """
    html_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    return html_files

def html_files_to_pdf(html_files, output_pdf):
    """
    Convert a list of HTML files to a single PDF file.
    """
    options = {
        "enable-local-file-access": "",
        'page-size': 'Letter',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'encoding': "UTF-8",
        'custom-header': [
            ('Accept-Encoding', 'gzip')
        ],
        'no-outline': None
    }
    pdfkit.from_file(html_files, output_pdf, options=options)

if __name__ == '__main__':
    directory = './.vitepress/dist'  # Change this to your directory
    output_pdf = 'output.pdf'  # Output PDF file name
    html_files = find_html_files(directory)
    html_files_to_pdf(html_files, output_pdf)
    print(f"Generated PDF: {output_pdf}")

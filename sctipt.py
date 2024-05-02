import os
import re
import requests

def download_image(url, path):
    """Download an image from a URL to a given path."""
    response = requests.get(url)
    if response.status_code == 200:
        with open(path, 'wb') as f:
            f.write(response.content)
    else:
        print(f"Failed to download {url}")

def update_markdown_file(file_path, mapping):
    """Update the Markdown file with new local image paths."""
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    for old, new in mapping.items():
        content = content.replace(old, new)
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

def process_directory(directory):
    """Process all Markdown files in the directory."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                full_path = os.path.join(root, file)
                with open(full_path, 'r', encoding='utf-8') as md_file:
                    md_content = md_file.read()
                    urls = re.findall(r'!\[.*?\]\((.*?)\)', md_content)
                    mapping = {}
                    for url in urls:
                        if url.startswith('http'):  # Checking if it's a valid URL
                            filename = os.path.basename(url)
                            local_path = os.path.join(root, filename)
                            download_image(url, local_path)
                            mapping[url] = local_path
                update_markdown_file(full_path, mapping)

# Change 'your_directory_path' to your actual directory path where Markdown files are stored
process_directory('.')

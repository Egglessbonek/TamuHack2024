import os
import json
from sys import argv

def list_files(folder_path):
    try:
        files = [argv[2] + f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
        return files
    except FileNotFoundError:
        print(f"Error: Directory not found - {folder_path}")
        return []

if __name__ == "__main__":

    folder_path = argv[1]  # Replace with your actual directory path
    files = list_files(folder_path)

    if files:
        print("List of files:")
        print(json.dumps(files, indent=2))
    else:
        print("No files found.")
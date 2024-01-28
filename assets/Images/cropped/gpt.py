import os

def get_image_paths(directory_path):
    try:
        image_paths = [os.path.abspath(os.path.join(directory_path, f))[73:] for f in os.listdir(directory_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg', '.webp'))]
        return image_paths
    except FileNotFoundError:
        print(f"Error: Directory not found - {directory_path}")
        return []

if __name__ == "__main__":
    folder_path = input()  # Replace with your actual directory path
    image_paths = get_image_paths(folder_path)

    if image_paths:
        print("List of image paths:")
        print(image_paths)
    else:
        print("No images found.")
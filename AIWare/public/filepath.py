import os;

def get_files(dir):
    files = []
    for file in os.listdir(dir):
        if os.path.isfile(os.path.join(dir, file)):
            if not file.startswith("."):
                files.append(os.path.join(dir, file))
        elif os.path.isdir(os.path.join(dir, file)):
            files += get_files(os.path.join(dir, file))
    return files
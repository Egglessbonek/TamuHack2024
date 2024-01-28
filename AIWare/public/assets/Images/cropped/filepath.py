import os;

def make_json(dir):
    result = "{"
    for file in os.listdir(dir):
        if os.path.isfile(os.path.join(dir, file)):
            if not file.startswith("."):
                files.append(os.path.join(dir, file))
        elif os.path.isdir(os.path.join(dir, file)):
            files += make_json(os.path.join(dir, file))
    return files

make_json("/")
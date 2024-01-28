from PIL import Image
from sys import argv
import os

def get_files(dir):
    files = []
    for file in os.listdir(dir):
        if os.path.isfile(os.path.join(dir, file)):
            if not file.startswith("."):
                files.append(os.path.join(dir, file))
        elif os.path.isdir(os.path.join(dir, file)):
            files += get_files(os.path.join(dir, file))
    return files


in_files = get_files("resized/")
out_files = ['cropped/' + file.split('/', 1)[1] for file in in_files]

# in_img = argv[1]
# out_img = argv[2]
# width, height = int(argv[3]), int(argv[4])

def scale_img(in_img, out_img):
    img = Image.open(in_img)
    origw, origh = img.size
    neww = 0
    newh = 0
    if origw >= origh:
        newh = 1024
        neww = origw * 1024 // origh
    else:
        neww = 1024
        newh = origh * 1024 // origw


    img = img.resize((neww, newh))

    # make nested folder if not exists
    os.makedirs(os.path.dirname(out_img), exist_ok=True)
    
    img.save(out_img)

def crop_img(in_img, out_img):
    img = Image.open(in_img)
    origw, origh = img.size
    if origw == 1024:
        img = img.crop((0, (origh - 1024) // 2, origw, origh - (origh - 1024) // 2))
    else:
        img = img.crop(((origw - 1024) // 2, 0, origw - (origw - 1024) // 2, origh))

    # make nested folder if not exists
    os.makedirs(os.path.dirname(out_img), exist_ok=True)
    
    img.save(out_img)

        

for in_file, out_file in list(zip(in_files, out_files)):
    crop_img(in_file, out_file)




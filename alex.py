import json
import os

orig = json.loads(open('../src/Game/images.json').read())
edited = {}
subkeys = ['ai', 'real']
for key in orig:
    edited[key] = {}
    for subkey in subkeys:
        if type(orig[key][subkey]) == list:
            edited[key][subkey] = orig[key][subkey]
            continue
            
        files = []
        img_path = orig[key][subkey].split('/', 2)[2]
        for file in os.listdir(img_path):
            files.append(os.path.join('/public', img_path, file))
        
        edited[key][subkey] = files

open('images.json', 'w').write(json.dumps(edited, indent=4))
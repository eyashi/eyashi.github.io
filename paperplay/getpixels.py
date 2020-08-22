# Awful script to convert my pixelated face into usable point-defined rectangles for Paper.js

from PIL import Image
import json

im = Image.open('my_face.png')

width, height = im.size
pixel_size = 4
x_scan = 0
y_scan = 0
pixel_bounds = []
p_int = None

while p_int != 0:
    p_int = im.getpixel((x_scan, y_scan))
    x_scan += 1
    if x_scan >= width:
        x_scan = 0
        y_scan += 1

x_init, y_init = x_scan, y_scan
pixel_bounds.append([[x_init, y_init], [x_init+4, y_init+4]])

while y_scan < height:
    x_scan += 4
    if x_scan >= width:
        x_scan = 0
        y_scan += 4
    try:
        p_int = im.getpixel((x_scan, y_scan))
    except:
        pass

    if p_int == 0:
        pixel_bounds.append([[x_scan, y_scan], [x_scan+4, y_scan+4]])

with open('points.js', 'w') as f:
    output = 'points ='
    output += json.dumps(pixel_bounds)
    f.write(output)

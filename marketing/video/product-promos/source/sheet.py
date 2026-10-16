import sys,glob
from PIL import Image
name=sys.argv[1]
fs=sorted(glob.glob(f'out/{name}/still-*.png'),key=lambda f:float(f.split('-')[-1][:-4]))
W=640;H=360;cols=4;rows=(len(fs)+cols-1)//cols
sh=Image.new('RGB',(cols*W,rows*H),'white')
for i,f in enumerate(fs):
    im=Image.open(f).convert('RGB'); im.thumbnail((W-4,H-4)); sh.paste(im,((i%cols)*W+2,(i//cols)*H+2))
sh.save(f'{name}-sheet.jpg',quality=85); print(len(fs))

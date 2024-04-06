# Carlgo11.dev

This repository contains the code for [carlgo11.dev](https://carlgo11.dev/), a personal link directory, similar to what [Linktree](https://linktr.ee) and [Beacons](https://beacons.ai) offer.

```shell
apt install fontcustom -y
npm install sass html-minifier;
npx sass index.scss:index.css --style compressed;
sed -i "s/{{imessage_fpr}}/$imessage_fpr/g" index.html
npx html-minifier --collapse-whitespace --remove-comments --remove-script-type-attributes -o index.html index.html
fontcustom compile icons -o=fonts -n=icons -ADh --css3 -S=.{{glyph}}
```

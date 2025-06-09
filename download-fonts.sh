#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p src/assets/fonts

# Download font files
curl -L "https://raw.githubusercontent.com/Vizzuality/sea-level-lab/master/app/fonts/akzidenzgrotesk-regular-webfont.woff2" -o src/assets/fonts/AkzidenzGrotesk-Regular.woff2
curl -L "https://raw.githubusercontent.com/Vizzuality/sea-level-lab/master/app/fonts/akzidenzgrotesk-regular-webfont.woff" -o src/assets/fonts/AkzidenzGrotesk-Regular.woff
curl -L "https://raw.githubusercontent.com/Vizzuality/sea-level-lab/master/app/fonts/akzidenzgrotesk-bold-webfont.woff2" -o src/assets/fonts/AkzidenzGrotesk-Bold.woff2
curl -L "https://raw.githubusercontent.com/Vizzuality/sea-level-lab/master/app/fonts/akzidenzgrotesk-bold-webfont.woff" -o src/assets/fonts/AkzidenzGrotesk-Bold.woff 
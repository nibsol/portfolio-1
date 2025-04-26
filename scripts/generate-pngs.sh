#!/bin/bash

# This script uses Inkscape or rsvg-convert to convert SVG to PNG
# Note: You need either Inkscape or librsvg installed

# Favicon conversion
if command -v inkscape &> /dev/null
then
    echo "Using Inkscape to convert SVG to PNG"
    inkscape -w 16 -h 16 public/favicon.svg -o public/favicon-16x16.png
    inkscape -w 32 -h 32 public/favicon.svg -o public/favicon-32x32.png
    inkscape -w 192 -h 192 public/logo192.svg -o public/logo192.png
    inkscape -w 512 -h 512 public/logo512.svg -o public/logo512.png
    inkscape -w 180 -h 180 public/apple-touch-icon.svg -o public/apple-touch-icon.png
elif command -v rsvg-convert &> /dev/null
then
    echo "Using rsvg-convert to convert SVG to PNG"
    rsvg-convert -w 16 -h 16 public/favicon.svg -o public/favicon-16x16.png
    rsvg-convert -w 32 -h 32 public/favicon.svg -o public/favicon-32x32.png
    rsvg-convert -w 192 -h 192 public/logo192.svg -o public/logo192.png
    rsvg-convert -w 512 -h 512 public/logo512.svg -o public/logo512.png
    rsvg-convert -w 180 -h 180 public/apple-touch-icon.svg -o public/apple-touch-icon.png
else
    echo "Error: Neither Inkscape nor rsvg-convert is installed"
    echo "Please install one of them to convert SVG to PNG"
    exit 1
fi

# Create a multi-size favicon.ico file
if command -v convert &> /dev/null
then
    echo "Creating multi-size favicon.ico"
    convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico
else
    echo "Warning: ImageMagick's convert tool is not installed"
    echo "Cannot create multi-size favicon.ico"
fi

echo "PNG generation complete" 
#!/bin/bash
echo "Starting..."

# Remove /dist if it exists
echo "Removing old builds..."
rm -rfv ./dist
mkdir ./dist

echo "Starting Parcel..."
parcel build public/index.html

echo "Build done. Starting deployment..."
cd ./dist
echo "Deploying..."
now --target production
echo "Done."

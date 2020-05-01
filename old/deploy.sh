#!/bin/bash

source `which virtualenvwrapper.sh`
# run generator script
workon ed
python scripts/projectpages.py

# commit changes
git add *
echo Deploy commit message:
read commitMessage
git commit -m "$commitMessage"
git push
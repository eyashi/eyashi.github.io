workon ed

python scripts/projectpages.py

git add *

set /P cmtMsg ="Deploy commit message: "
git commit -m "%cmtMsg%"
git push 
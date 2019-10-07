echo off

CALL workon ed
CALL python scripts/projectpages.py
CALL git add *
set /P cmtMsg ="Deploy commit message: "
CALL git commit -m "%cmtMsg%"
CALL git push 
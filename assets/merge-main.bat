@echo off
setlocal

echo ==========================================
echo   MERGE DEVELOPMENT INTO MAIN
echo ==========================================
echo.

echo Current branch:
git branch --show-current
echo.

echo -------- CHECKING WORKING TREE --------
git status --short
echo.

git diff --quiet
if errorlevel 1 (
    echo ERROR: You have uncommitted changes.
    echo Commit or stash them before merging.
    pause
    exit /b 1
)

git diff --cached --quiet
if errorlevel 1 (
    echo ERROR: You have staged changes.
    echo Commit or unstage them before merging.
    pause
    exit /b 1
)

echo.
echo -------- FETCHING REMOTE --------
git fetch origin

if errorlevel 1 (
    echo ERROR: Could not fetch from remote.
    pause
    exit /b 1
)

echo.
echo -------- SWITCHING TO DEVELOPMENT --------
git checkout development

if errorlevel 1 (
    echo ERROR: Could not switch to development.
    pause
    exit /b 1
)

echo.
echo -------- UPDATING DEVELOPMENT --------
git pull --ff-only origin development

if errorlevel 1 (
    echo ERROR: Could not update development.
    pause
    exit /b 1
)

echo.
echo -------- SWITCHING TO MAIN --------
git checkout main

if errorlevel 1 (
    echo.
    echo Local main branch does not exist.
    echo Creating local main from origin/main...

    git checkout -b main origin/main

    if errorlevel 1 (
        echo ERROR: Could not create local main.
        pause
        exit /b 1
    )
)

echo.
echo -------- UPDATING MAIN --------
git pull --ff-only origin main

if errorlevel 1 (
    echo ERROR: Could not update main.
    pause
    exit /b 1
)

echo.
echo -------- MERGING DEVELOPMENT INTO MAIN --------
git merge development

if errorlevel 1 (
    echo.
    echo ==========================================
    echo   MERGE CONFLICT!
    echo ==========================================
    echo.
    echo Resolve the conflicts manually.
    echo Then run:
    echo.
    echo     git add .
    echo     git commit
    echo     git push origin main
    echo.
    pause
    exit /b 1
)

echo.
echo -------- PUSHING MAIN --------
git push origin main

if errorlevel 1 (
    echo.
    echo ERROR: Push to main failed.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   SUCCESS
echo   development has been merged into main
echo ==========================================
echo.

git log --oneline --decorate -5

pause
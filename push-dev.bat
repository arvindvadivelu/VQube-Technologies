@echo off
setlocal

echo ==========================================
echo   PUSH LOCAL CODE TO DEVELOPMENT
echo ==========================================
echo.

git branch --show-current
echo.

if not "%cd%"=="" (
    echo Current folder:
    echo %cd%
    echo.
)

echo -------- STATUS BEFORE ADD --------
git status
echo.

git add .

echo -------- STATUS AFTER ADD --------
git status
echo.

set /p "COMMIT_MSG=Enter commit message: "

if "%COMMIT_MSG%"=="" (
    echo.
    echo ERROR: Commit message cannot be empty.
    pause
    exit /b 1
)

echo.
echo -------- COMMIT --------
git commit -m "%COMMIT_MSG%"

if errorlevel 1 (
    echo.
    echo Commit failed.
    pause
    exit /b 1
)

echo.
echo -------- PUSH TO DEVELOPMENT --------
git push origin development

if errorlevel 1 (
    echo.
    echo Push failed.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   SUCCESS: Code pushed to development
echo ==========================================
pause
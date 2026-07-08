@echo off
title Blog Deployment Pipeline
echo ===================================================
echo   Initiating Deployment to GitHub...
echo ===================================================
echo.

:: Show current status
git status

echo.
:: Stage all changes
git add .
echo [OK] Changes staged.

echo.
:: Prompt for a commit message
set /p commitMsg="Enter commit message (Press Enter for 'Auto-update blog content'): "

:: Apply default message if left blank
if "%commitMsg%"=="" set commitMsg=Auto-update blog content

:: Commit the changes
git commit -m "%commitMsg%"
echo [OK] Changes committed.

echo.
:: Push to the main branch
git push origin main
echo [OK] Changes pushed to remote repository.

echo.
echo ===================================================
echo   Deployment Complete! 
echo ===================================================
pause
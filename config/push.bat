@echo off
title VQube Development Deployment Pipeline
echo ===================================================
echo   Initiating Deployment to GitHub (development)...
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
set /p commitMsg="Enter commit message (Press Enter for 'Update website and assets'): "

:: Apply default message if left blank
if "%commitMsg%"=="" set commitMsg=Update website and assets

:: Commit the changes
git commit -m "%commitMsg%"
echo [OK] Changes committed.

echo.
:: Push to the development branch
git push origin development
echo [OK] Changes pushed to remote development branch.

echo.
echo ===================================================
echo   Development Deployment Complete! 
echo ===================================================
pause
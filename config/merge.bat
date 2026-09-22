@echo off
title VQube Branch Merge Pipeline (Development -> Main)
echo ===================================================
echo   Merging development branch into main...
echo ===================================================
echo.

echo [1/5] Switching to main branch...
git checkout main

echo.
echo [2/5] Pulling latest changes from origin/main...
git pull origin main

echo.
echo [3/5] Merging development into main...
git merge development -m "Merge branch 'development' into main"

echo.
echo [4/5] Pushing merged changes to origin/main...
git push origin main

echo.
echo [5/5] Returning to development branch...
git checkout development

echo.
echo ===================================================
echo   Merge and Production Deployment Complete!
echo ===================================================
pause

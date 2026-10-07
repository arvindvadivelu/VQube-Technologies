@echo off
setlocal enabledelayedexpansion

title VQube Technologies - Push to Development Branch

echo ======================================================================
echo    VQube Technologies - Push Changes to 'development' Branch
echo ======================================================================
echo Repository: https://github.com/arvindvadivelu/VQube-Technologies.git
echo Target Branch: development
echo ======================================================================
echo.

cd /d "%~dp0"

:: 1. Ensure git is installed
where git >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git is not installed or not in system PATH.
    pause
    exit /b 1
)

:: 2. Ensure on development branch
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i

if not "%CURRENT_BRANCH%"=="development" (
    echo [INFO] Currently on '%CURRENT_BRANCH%'. Switching to 'development'...
    git checkout development
    if %ERRORLEVEL% neq 0 (
        echo [ERROR] Could not switch to development branch.
        pause
        exit /b 1
    )
)

echo [OK] Active branch: development
echo.

:: 3. Show current status
git status
echo.

:: 4. Prompt for commit message
set /p COMMIT_MSG="Enter commit message (Press Enter for default 'Update development branch'): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update development branch

echo.
echo [INFO] Staging changes...
git add .

echo [INFO] Creating commit: "%COMMIT_MSG%"...
git commit -m "%COMMIT_MSG%"

echo.
echo [INFO] Pulling remote updates with rebase...
git pull --rebase origin development

echo.
echo [INFO] Pushing to origin/development...
git push origin development

if %ERRORLEVEL% equ 0 (
    echo.
    echo ======================================================================
    echo [SUCCESS] Successfully pushed to origin/development!
    echo ======================================================================
) else (
    echo.
    echo ======================================================================
    echo [ERROR] Push failed. Check credentials or remote conflicts.
    echo ======================================================================
)

echo.
pause

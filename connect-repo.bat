@echo off
setlocal enabledelayedexpansion

title VQube Technologies - Connect to GitHub Development Branch

echo ======================================================================
echo    VQube Technologies - Git Remote & Development Branch Setup
echo ======================================================================
echo Repository: https://github.com/arvindvadivelu/VQube-Technologies.git
echo Branch:     development
echo ======================================================================
echo.

cd /d "%~dp0"

:: 1. Check if git is installed
where git >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git is not installed or not found in system PATH.
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

:: 2. Check if .git directory exists, if not initialize
if not exist ".git" (
    echo [INFO] Initializing new Git repository...
    git init
    if %ERRORLEVEL% neq 0 (
        echo [ERROR] Failed to initialize Git repository.
        pause
        exit /b 1
    )
)

:: 3. Configure Remote URL
echo [INFO] Setting remote 'origin' to https://github.com/arvindvadivelu/VQube-Technologies.git ...
git remote get-url origin >nul 2>&1
if %ERRORLEVEL% equ 0 (
    git remote set-url origin https://github.com/arvindvadivelu/VQube-Technologies.git
    echo [OK] Updated existing remote 'origin'.
) else (
    git remote add origin https://github.com/arvindvadivelu/VQube-Technologies.git
    echo [OK] Added remote 'origin'.
)

:: 4. Fetch from remote
echo [INFO] Fetching branches from origin...
git fetch origin
if %ERRORLEVEL% neq 0 (
    echo [WARN] Fetch encountered an issue. Please verify internet connection or GitHub authentication.
)

:: 5. Switch to development branch
echo [INFO] Switching to 'development' branch...
git show-ref --verify --quiet refs/heads/development
if %ERRORLEVEL% equ 0 (
    git checkout development
) else (
    git checkout -b development origin/development 2>nul || git checkout -b development
)

:: 6. Set upstream tracking to origin/development
echo [INFO] Setting upstream tracking to origin/development...
git branch --set-upstream-to=origin/development development >nul 2>&1

:: 7. Pull latest changes
echo [INFO] Syncing with origin/development...
git pull origin development

echo.
echo ======================================================================
echo [SUCCESS] Connected to https://github.com/arvindvadivelu/VQube-Technologies.git
echo [SUCCESS] Current active branch is 'development'.
echo ======================================================================
echo.
git status
echo.
pause

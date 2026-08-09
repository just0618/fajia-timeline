@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo Fajia Time Archive - local preview
echo ============================================
echo.
echo Preview URL: http://127.0.0.1:8765/
echo Press Ctrl+C in this window to stop the server.
echo.

start "" "http://127.0.0.1:8765/"

if exist "D:\anaconda3\python.exe" (
  "D:\anaconda3\python.exe" -m http.server 8765 --bind 127.0.0.1
  goto :end
)

where py >nul 2>nul
if %errorlevel%==0 (
  py -3 -m http.server 8765 --bind 127.0.0.1
  goto :end
)

where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server 8765 --bind 127.0.0.1
  goto :end
)

echo.
echo ERROR: Python was not found.
echo Expected D:\anaconda3\python.exe, py, or python.
pause

:end
endlocal

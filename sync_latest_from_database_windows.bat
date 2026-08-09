@echo off
setlocal
cd /d "%~dp0"

set "PYEXE=D:\anaconda3\python.exe"
if not exist "%PYEXE%" set "PYEXE=python"

echo ==============================================
echo Fajia Time Archive V0.6.2 - sync latest database export
echo ==============================================
echo.

"%PYEXE%" "%~dp0scripts\sync_from_data_repo.py" "E:\fajia-timeline\fajia-timeline-data"
set "ERR=%ERRORLEVEL%"
echo.

if "%ERR%"=="0" (
  echo OK: sync completed.
  echo Next: run open_preview_windows.bat and check PART 03.
) else (
  echo ERROR: sync failed with exit code %ERR%.
  echo Please keep this window open and send a screenshot of the error above.
)

pause
exit /b %ERR%

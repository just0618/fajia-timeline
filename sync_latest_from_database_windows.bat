@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ==============================================
echo  法嘉时间档案 V0.6 - 同步最新母数据库导出
echo ==============================================
echo.

set "PYEXE=D:\anaconda3\python.exe"
if exist "%PYEXE%" goto run
set "PYEXE=python"

:run
"%PYEXE%" scripts\sync_from_data_repo.py "E:\fajia-timeline\fajia-timeline-data"
set ERR=%ERRORLEVEL%
echo.
if not "%ERR%"=="0" (
  echo 同步未完成。请根据上方提示处理后再运行。
) else (
  echo 同步完成。现在可双击 open_preview_windows.bat 查看 PART 03 五月正式章。
)
echo.
pause
exit /b %ERR%

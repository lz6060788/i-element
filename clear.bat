@echo off
for /d /r %%i in (node_modules) do (
    if exist "%%i" (
        echo Deleting: %%i
        rmdir /s /q "%%i"
    )
)
pause

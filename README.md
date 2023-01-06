# cpp-tutorial

# use sciter.js in codeblocks
https://www.thundertronics.com/Using_Sciter.JS_in_CodeBlocks.html

create a project in a folder and do below step by step:
1. Copy C:\MY\sciter-js-sdk-main\bin\windows\packfolder.exe file to C:\MY\test\ folder
2. Copy C:\MY\sciter-js-sdk-main\bin\windows\x64\sciter.dll to C:\MY\test\bin\Debug\ and C:\MY\test\bin\Release\
3. Open Project → Build options...
4. Double-click on project name "test" to make changes work for both Debug and Release configurations
5. Under "Compiler settings" tab check "Static linking [-static]"
6. Under "Linker settings" tab add winmm, ws2_32 and libole32 to link libraries and -municode option to linker options
7. Under "Search directories" tab add path to C:\MY\sciter-js-sdk-main\include\
8. Under "Pre/post" build steps add Pre-build command packfolder.exe resources resources.cpp -v "resources"
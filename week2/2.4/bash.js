/*

1) pwd: print working directory
2) cd: change directory
3) cd .. : go back one folder then the current folder
4) ls: list all files and folders in the current directory
-> ls -l: list all files and folders in the current directory with details
-> ls -R: list all files and folders in the current directory and all subdirectories
-> ls -t: list all files and folders in the current directory sorted by time
-> ls -lt: list all files and folders in the current directory with details sorted by time
-> ls -la: list all files and folders in the current directory including hidden files
-> ls -lRa: list all files and folders in the current directory and all subdirectories including hidden files in recursive order or all files and folders in the current directory and all subdirectories with details
-> ls -lrt: list all files and folders in the current directory sorted by time with details
-> ls -s: list all files and folders in the current directory with size
-> ls -lR | grep .txt: list all files and folders in the current directory and all subdirectories with details and search for .txt files
-> ls *.txt: list all .txt files in the current directory //!(wildcard)
-> ls a*: list all files and folders starting with a in the current directory //!(wildcard)

5) mkdir: make directory
-> mkdir -p folderName/filname: create a folder and a file inside it
6) touch: create a file
7) cat: read a file
-> cat > fileName: edit/write a file
-> cat >> fileName: append to a file
-> head fileName: read the first 10 lines of a file
-> tail fileName: read the last 10 lines of a file
-> head -n filName: read the first n lines of a file //! n is a number
-> tail -n filName: read the last n lines of a file //! n is a number
-> | : pipe operator is used to combine multiple commands
-> tail -n +number filName: read the file from the number line to the end of the file
-> tail -n +number filName | head -n number: read the file from the number line mentioned in tail till the number of times mentioned in head
8) vi: open a file in vi editor
-> i: insert mode
-> esc: command mode
-> :wq: save and exit
-> :q!: exit without saving
9) mv: move a file
-> mv fileName folderName/
-> mv folderName1 folderName2(where folderName1 will go inside folderName2)
-> mv folderName1 folderName2/folderName3(where folderName1 will go inside folderName3 which is inside folderName2)
-> mv olderFileName newFileName //!(rename a file)

10) cp: copy a file
-> cp fileName folderName/ where fileName will be copied to folderName
-> cp -r folderName1 folderName2/ where folderName1 will be copied to folderName2 -r is used to copy the folder recursively

11) use && to run multiple commands in a single line:
-> like mkdir folderName && cd folderName

12) rm: remove a file
-> rm fileName
-> rm -r folderName: remove a folder

13) chmod: change file permissions
-> ugo: user, group, others
-> +, -: add, remove permissions
-> for folder we need to add -R
-> chmod u+x fileName: give execute permission to the user
-> 4: read, 2: write, 1: execute //! numberic permission (these number are combined ie added to form the permission)
-> chmod 461 fileName: give read permission to the user, read and write permission to the group and execute permission to others
-> chmod 777 fileName: give all permissions to all users
-> chmod 755 fileName: give all permissions to the user and read and execute permissions to the group and others

14) echo: print a message on terminal

15) wc fileName: count the number of lines, words and characters in a file

16) grep: search for a pattern in a file
-> grep "word" fileName: search for a word in a file
-> grep "word" fileName | wc: count the number of lines, words and characters in a file
-> grep "word" fileName -l: gives the number of times occurence of the word in the file
-> grep -c "word" fileName: gives the number of times occurence of the word in the file
-> grep -h "word" fileName: gives the word and the line in which it is present
-> grep -hi "word" fileName: gives the word and the line in which it is present ignoring the case
-> grep -hir "word" folderName: search for a word in a folder and all its subfolders
-> grep -hin "word" fileName: gives the word and the line in which it is present with line number
->grep -o "word" fileName: This command will print only the matching word, but not the whole line where it's found. It extracts and shows just the part of the text that matches the pattern.
->grep -w "word" fileName: This command will print the entire line where the word is found, but it matches only if "word" is an exact whole word. It ensures that the pattern appears as a separate word, not part of another word.
-> grep -v "word" fileName: This command will print only the lines that do not contain the word you specify.
-> grep -A number "word" fileName: This command will print the line where the word is found, along with the number of lines that follow it. //!(Note: Whenever it find the word it will print the next number of lines)
-> grep -B number "word" fileName: This command will print the line where the word is found, along with the number of lines that precede it. //!(Note: Whenever it find the word it will print the next number of lines)
-> grep -C number "word" fileName: This command will print the line where the word is found, along with the number of lines that precede and follow it. //!(Note: Whenever it find the word it will print the next number of lines)

17) history 0: list all the commands used in the terminal

18) newscript.sh: create a script file
#!/bin/bash
echo "Hello World!"
mkdir automated_dir
cd automated_dir && touch newscript_file.txt

-> bash newscript.sh: run the script file

19) sed: stream editor
-> sed -n '/word/ p' fileName: print the line containing the word
-> sed 's/previousWrod/newWord/' fileName: replace the previousWord with newWord in the file
-> sed -ibackup 's/previousWrod/newWord/' fileName: replace the previousWord with newWord in the file and create a backup file
-> sed 'n1,n2 s/previousWrod/newWord/' fileName: replace the previousWord with newWord in the file from line n1 to line n2, where n1 and n2 are line numbers
-> sed -n '3, /word/ p' log.txt: This command looks for a range of lines starting from line 3 and ending at the first line that contains the word.

11) awk: pattern scanning and processing language
-> awk '/word/{print $0}' fileName: print the line containing the word
-> awk '{gsub(/previousWord/, "newWord")}{print}' log.txt: replace the previousWord with newWord in the file //!(Note: It is just printing the file not changing the file)
-> awk 'BEGIN {print "LOG SUMMARY\n------"}{print} END {print "END OF LOG SUMMARY\n------"}' fileName: print the LOG SUMMARY at the beginning and END OF LOG SUMMARY at the end of the file
-> awk '{print $1, $2}' fileName: print the first and second column of the file
-> awk -F "," '{print $1, $2}' fileName: print the first and second column of the file where the delimiter is comma
-> awk '{count[$2]++} END {print count["wordToSearch"]}' fileName: count the number of times the wordToSearch is present in the file
-> awk '{ if($1 > 1235) {print $0}}' fileName: This command will print the entire line if the first column value is greater than 1235.



*/
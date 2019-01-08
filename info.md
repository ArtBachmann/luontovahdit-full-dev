found a solution using set-url which is concise and fairly easy to understand:

create a new repo at Github
cd into the existing repository on your local machine (if you haven't cloned it yet, then do this first)
git remote set-url origin https://github.com/user/example.git
git push -u origin master
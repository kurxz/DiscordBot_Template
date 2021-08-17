# DiscordBot_Template
A simple template using DiscordJS\
Includes: Anti spam, A folder handler to commands, Prefix ( % ), Bot playing status, And a basic command ( %hi )

## How to use for beginners
You will need [NodeJS](https://nodejs.org/en/download/)\
After Nodejs download, clone this repo open the folder using NodeJS command prompt. Then run `npm install` to install **package.json** dependencies. You **probably** will need to **update** the **DiscordJS**.
```javascript
npm i -g npm-check-updates
ncu -u
npm install
```
 **index.js** its your main file. This project was made to run on your computer using NodeJS.\
If you are going to deploy to somewhere you **NEED** to adapt the code.\
At .env file you put your bot token.\
\
**NOTE: You must NEVER UPLOAD your .env file. It must be set as environment variable.**\
\
After all done if everything was made right just type `node index.js` or `node .`\
And your bot should be Online

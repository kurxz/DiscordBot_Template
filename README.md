# DiscordBot_Template
#### A simple template using DiscordJS\
#### Includes: Anti spam, A folder handler to commands, Prefix ( % ), Bot playing status, And a basic command ( %hi )

## How to use for beginners
You will need [NodeJS](https://nodejs.org/en/download/)\
After Nodejs download, clone this repo open the folder using NodeJS command prompt. Then run `npm install` to install **package.json** dependencies. You **probably** will need to **update** the **DiscordJS**. Go to the project folder on your PC then run those lines
```javascript
npm i -g npm-check-updates
ncu -u
npm install
```
> The command `npm i -g npm-check-updates` will install globally a package to check updates\
> On the directory of the project when you run `ncu -u` it will scan and update the dependencies of your project\
> Finally `npm install` will do the installation of new packages

 **index.js** its your main file. This project was made to run on your computer using NodeJS.\
If you are going to deploy to somewhere you **NEED** to adapt the code.\
At .env file you put your bot token.\
\
**NOTE: You must NEVER UPLOAD your .env file to public. It must be set as environment variable on your host**\
\
Due new Discord Policy you need to declare the intents of your bot As marked on [line 3](https://github.com/kurxz/discordBot_Template/blob/main/index.js#L3)
depending on your wishes you need to **change the intents** you can find the list of intents on [Discord API](https://discord.com/developers/docs/topics/gateway#list-of-intents)

After all done if everything was made right just type `node index.js` or `node .`\
And your bot should be Online

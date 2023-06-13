# kevGPT
Stupid Discord bot for friends
## Setup
This adds a `/kevGPT` command to discord. 
You will need a `.env` file that is structured like this:

```env
DISCORD_TOKEN=[someDiscordToken]
CLIENT_ID=[yourApplicationClientID]
SERVER_ID=[yourServersId]
```

After that you'll need to run

```shell
node deploy-commands.js
```

That will _add_ the `/kevgpt` command to the server.

To alter the array of responses they are located as `replies[]` in `commands/kevGPT.js`
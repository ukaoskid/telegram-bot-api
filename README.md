# telegram-bot-api-client

Telegram Bot API Client interface.

## Full documentation
[https://ukaoskid.github.io/telegram-bot-api/](https://ukaoskid.github.io/telegram-bot-api/)

## Installation and use

To install the package just type `npm i telegram-bot-api-client --save`

### Example

#### First you need to create a Telegram Bot
Open Telegram and search for **@BotFather**. It is the manager of all Telegram's bot.
The bot creation happens entirely on the chat by using commands.

- Request a new bot: `/newbot`
    - **@BotFather** will ask you for a name to give: `give-a-name-to-the-bot`
- Finally request for a token: `/token`
    - **@BotFather** will reply you with a token. Copy it.
- Just if you want, you can set the bot as an entity that can join Telegram groups: `/setjoingroups`
    - **@BotFather** will ask you to `enable` or `disable` the bot to join groups: `enable | disable`

Now you have activated your bot. Let's try to send a message:

```javascript
import { Telegram } from "telegram-bot-api-client/dist/telegram/telegram";
import { ISendMessagePayload } from "telegram-bot-api-client/dist/interfaces/payloads/send/send-message-payload";

let botToken = "the token you got from @BotFather";
let telegram: Telegram = new Telegram(botToken);
let userChatId: 12345678;

/*
 * Generally, you need to know the Telegram ID of the user you want to involve in the action.
 */
let messagePayload: ISendMessagePayload = {
  chat_id: userChatId,
  text: "testing a text message"
}

telegram.messages.sendMessage(messagePayload)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(JSON.stringify(error));
    });
```

## What's on the plan to do

- [ ] Integrating JSDoc to the project
- Telegram API Integration
    - [ ] InputFile mode to send encoded payloads (audio, documents, etc.)
    - [X] Generic available methods (added in 1.0.0)
    - [X] Inline mode
    - [X] Getting updates (bot's incoming updates and webhook management) (added in 1.0.6)
    - [X] Payments (added in 1.0.7)
    - [X] Games (added in 1.0.8)

## Changelog

### 1.0.9 - Current
- Added **Inline mode** interface
- Improved the JSDoc

### 1.0.8
- Added **Games** interface
- Improved the JSDoc

### 1.0.7
- Added **Payments** interface
- Improved the JSDoc

### 1.0.6
- Added **Getting updates** interface (bot's incoming updates and webhook mangement)
- Improved the JSDoc

### 1.0.5 > 1.0.1
- Improved the JSDoc

### 1.0.0
- Initial release
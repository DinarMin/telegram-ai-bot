
# Telegram AI - bot

Базовый шаблон для внедрения в бот Telegram ИИ-модель LM-studio.  
Basic template for implementation in the Telegram bot AI model LM-studio.


## Deployment

1.
```
 git clone https://github.com/DinarMin/telegram-ai-bot.git
```
2. 
```
npm install
```

3. Добавьте tg token в .env файл.
4. Измените название модели в файле src/ai.ts (там будет комментария на определенной строке)
(Не забудьте включить server API в LM studio во вкладке Developer.)

5.
```bash
  tsc 
```
6.
```
node dist/bot.js 
```

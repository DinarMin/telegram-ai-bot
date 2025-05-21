
# Telegram AI - bot

Базовый шаблон для внедрения в бот Telegram ИИ-модель LM-studio.  
Basic template for implementation in the Telegram bot AI model LM-studio.


## Deployment

1.
```bash
 git clone https://github.com/DinarMin/telegram-ai-bot.git

  
  tsc 

  node dist/bot.js


```

2. Добавьте token в .env файл.
3. Измените название модели в файле src/ai.ts (там будет комментария на определенной строке)
(Не забудьте включить server API в LM studio во вкладке Developer.)

4.
```bash
  tsc 
```
5.
```
node dist/bot.js 
```

import { Telegraf } from "telegraf";
import { getAIRepsonse } from "./ai.js";
import dotenv from "dotenv";
dotenv.config();
const token = process.env.TOKEN;
if (!token) {
    throw new Error("BOT_TOKEN is not set in environment variables.");
}
const bot = new Telegraf(token);
bot.start(async (ctx) => {
    await ctx.reply("Привет! Я твоя сучка и готова отвечать на вопросы!))");
    await ctx.reply("Задавай по скорее, я буду вежлива с тобой)");
    await ctx.reply("Мяяу)) Если нужна доп. информация пиши '/help'");
});
bot.help((ctx) => {
    ctx.reply('AI - модель: nous-Q8. Для связи с разработчиком пишите в tg: @dinar2202 ');
});
bot.on("text", async (ctx) => {
    try {
        if (!ctx.message || !("text" in ctx.message)) {
            await ctx.reply("Я понимаю только текстовые сообщения.");
            return;
        }
        const userMessage = ctx.message.text;
        const thinkingMsg = await ctx.reply("Формулирую мысли...");
        const aiReply = await getAIRepsonse(userMessage);
        await ctx.deleteMessage(thinkingMsg.message_id);
        await ctx.reply(aiReply);
    }
    catch (err) {
        console.error("Ошибка:", err);
        await ctx.reply("Ошибка при обращении к ИИ 😢");
    }
});
bot.launch();
console.log("🤖 Бот запущен!");

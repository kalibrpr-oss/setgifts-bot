import { Telegraf, Markup } from "telegraf";

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is missing");
}

const MINIAPP_URL = "https://setgifts.netlify.app/";
const WELCOME_IMAGE_URL = process.env.WELCOME_IMAGE_URL;

if (!WELCOME_IMAGE_URL) {
  throw new Error("WELCOME_IMAGE_URL is missing");
}

const bot = new Telegraf(BOT_TOKEN);

bot.start(async (ctx) => {
  const name = ctx.from?.first_name || "друг";

  await ctx.replyWithPhoto(
    WELCOME_IMAGE_URL,
    {
      caption: Привет, ${name} 👋\n\nДобро пожаловать в SetGiftsss!,
      ...Markup.inlineKeyboard([
        Markup.button.webApp("Magic ✨", MINIAPP_URL)
      ])
    }
  );
});

bot.launch();
console.log("Bot is running");
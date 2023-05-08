const fp = require('fastify-plugin');
const { Telegraf } = require('telegraf');

module.exports = fp(async function (fastify, opts, done) {
    console.log('telegram_bot plugin loaded')
    const bot = new Telegraf('6251726587:AAH0l_MHA75_SpahH1qU2VAnjAT7GSO_mNI');
    bot.command('start', async (ctx) => {
        const group_name = ctx.message.chat.title;
        const group_id = ctx.message.chat.id;
        await ctx.telegram.sendMessage(ctx.message.chat.id, `Xin chào nhóm "${group_name}"!`, {parse_mode: 'HTML'});
        await ctx.telegram.sendMessage(ctx.message.chat.id, `Tôi là Auto Banking Online Bot.`, {parse_mode: 'HTML'});
        await ctx.telegram.sendMessage(ctx.message.chat.id, `Chat ID của nhóm là <b>${group_id}</b>`, {parse_mode: 'HTML'});
        await ctx.telegram.sendMessage(ctx.message.chat.id, `Bạn có thể sử dụng Chat ID này để gửi thông báo đến nhóm.`, {parse_mode: 'HTML'});
        await ctx.telegram.sendMessage(ctx.message.chat.id, `Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!`, {parse_mode: 'HTML'});
        await ctx.telegram.sendMessage(ctx.message.chat.id, `Mọi thắc mắc xin liên hệ <b><a href="https://autobanking.online">autobanking.online</a> </b>`, {parse_mode: 'HTML'});
    })
    bot.launch();
    done()
});
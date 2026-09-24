import config from '../config.js';

export default {
    command: 'menu',
    aliases: ['help', 'm'],
    category: 'general',
    description: 'Displays the main menu',
    async handler(sock, message, args, context) {
        const chatId = context.chatId || message.key.remoteJid;
        
        const menuText = `✨ *Velothar Xenolex* ✨\n\n` +
            `👤 *Owner:* ✨⌈«͢͢𝐌𝐢𝐫𝐚𝐣𝐮𝐥♡︎𝐈𝐬𝐥𝐚𝐦»⌋⤹³🩷🪽\n` +
            `📱 *Bot:* Velothar Xenolex\n` +
            `🔖 *Version:* 6.0.0\n\n` +
            `Jekono command-er bistarito dekhte .smenu likhun.`;

        const messageOptions = {
            image: { url: 'https://i.postimg.cc/xC0qLGBz/Picsart-26-02-07-04-49-43-290.png' },
            caption: menuText,
            contextInfo: {
                forwardingScore: 0,
                isForwarded: false
            }
        };

        await sock.sendMessage(chatId, messageOptions, { quoted: message });
    }
};

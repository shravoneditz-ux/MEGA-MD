import config from '../config.js';

export default {
    command: 'menu',
    aliases: ['help', 'm'],
    category: 'general',
    description: 'Displays the main menu',
    async handler(sock, message, args, context) {
        const chatId = contextChatId || message.key.remoteJid;
        
        const menuText = `✨ *𝐕𝐞𝐥𝐨𝐭𝐡𝐚𝐫 𝐗𝐞𝐧𝐨𝐥𝐞𝐱* ✨\n\n` +
            `👤 *Owner:* ✨⌈«͢͢𝐌𝐢𝐫𝐚𝐣𝐮𝐥♡︎𝐈𝐬𝐥𝐚𝐦»⌋⤹³🩷🪽\n` +
            `📱 *Bot:* 𝐕𝐞𝐥𝐨𝐭𝐡𝐚𝐫 𝐗𝐞𝐧𝐨𝐥𝐞𝐱\n` +
            `🔖 *Version:* 6.0.0\n\n` +
            `যেকোনো কমান্ডের বিস্তারিত দেখতে .smenu লিখুন।`;

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

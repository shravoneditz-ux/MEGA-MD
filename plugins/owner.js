import config from '../config.js';

export default {
    command: 'owner',
    aliases: ['creator', 'dev'],
    category: 'info',
    description: 'Get the full contact and info of the bot owner',
    usage: '.owner',
    async handler(sock, message, args, context) {
        const chatId = context.chatId || message.key.remoteJid;
        try {
            const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${config.botOwner}
ORG:${config.botName};
TEL;type=CELL;type=VOICE;waid=${config.ownerNumber}:+${config.ownerNumber}
END:VCARD
            `.trim();

            await sock.sendMessage(chatId, {
                contacts: { displayName: config.botOwner, contacts: [{ vcard }] },
            }, { quoted: message });

            const infoText = `👑 *OWNER FULL INFORMATION* 👑\n\n` +
                `👤 *Name:* ${config.botOwner}\n` +
                `📱 *Number:* +${config.ownerNumber}\n` +
                `🤖 *Bot:* ${config.botName}\n` +
                `🔗 *Direct Contact:* wa.me/${config.ownerNumber}`;

            await sock.sendMessage(chatId, {
                image: { url: config.menuImage },
                caption: infoText,
                contextInfo: { forwardingScore: 0, isForwarded: false }
            }, { quoted: message });
        }
        catch (error) {
            console.error('Owner Command Error:', error);
            await sock.sendMessage(chatId, {
                text: '❌ Failed to fetch owner contact.'
            }, { quoted: message });
        }
    }
};

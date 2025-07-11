const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 💧 | 𝐋𝐢𝐦𝐮𝐥𝐞 𝐭𝐞𝐦𝐩𝐞𝐬𝐭 ]";

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "NTKhang", // orginal author Kshitiz
    countDown: 0,
    role: 0,
    shortDescription: {
      en: "View command usage",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
  const { threadID } = event;
  const threadData = await threadsData.get(threadID);
  const prefix = getPrefix(threadID);

  if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += `╔══════════════╗\n     💠𝐋𝐈𝐌𝐔𝐋𝐄 𝐂𝐌𝐃💠            \n╚══════════════╝`;

      for (const [name, value] of commands) {
          if (value.config.role > 1 && role < value.config.role) continue;

          const category = value.config.category || "Uncategorized";
          categories[category] = categories[category] || { commands: [] };
          categories[category].commands.push(name);
      }
8
      Object.keys(categories).forEach(category => {
          if (category !== "info") {
              msg += `\n╭────────────⭓\n│『 ${category.toUpperCase()} 』`;

              const names = categories[category].commands.sort();
              for (let i = 0; i < names.length; i += 1) {
                  const cmds = names.slice(i, i + 1).map(item => `│✧${item}`);
                  msg += `\n${cmds.join(" ".repeat(Math.max(0, 5 - cmds.join("").length)))}`;
              }

              msg += `\n╰────────⭓`;
          }
      });

      const totalCommands = commands.size;
      msg += `\n𝐉𝐞 𝐝𝐢𝐬𝐩𝐨𝐬𝐞 𝐚𝐜𝐭𝐮𝐞𝐥𝐥𝐞𝐦𝐞𝐧𝐭 𝐝𝐞 ${totalCommands}𝐜𝐦𝐝s  .\n\n`;
      msg += `𝐓𝐚𝐩𝐞( ${prefix} 𝐡𝐞𝐥𝐩 𝐩𝐥𝐮𝐬 𝐥𝐞 𝐧𝐨𝐦 𝐝𝐞 𝐥𝐚 𝐜𝐦𝐝) 𝐩𝐨𝐮𝐫 𝐕𝐨𝐢𝐫 𝐥𝐞𝐬 𝐝é𝐭𝐚𝐢𝐥𝐥𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐜𝐦𝐝\n\n`;
      msg += `🔹𝐋𝐢𝐦𝐮𝐥𝐞 𝐭𝐞𝐦𝐩𝐞𝐬𝐭 (•̀ᴗ•́)و`;


      const helpListImages = [

"https://i.ibb.co/nLTQZf1/image.jpg",
"https://i.ibb.co/nLTQZf1/image.jpg"];


      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];


      await message.reply({
          body: msg,
          attachment: await global.utils.getStreamFromURL(helpListImage)
      });
  } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `╭── NAME ────⭓
  │ ${configCommand.name}
  ├── INFO
  │ Description: ${longDescription}
  │ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"}
  │ Other names in your group: Do not have
  │ Version: ${configCommand.version || "1.0"}
  │ Role: ${roleText}
  │ Time per command: ${configCommand.countDown || 1}s
  │ Author: ${author}
  ├── Usage
  │ ${usage}
  ├── Notes
  │ The content inside <XXXXX> can be changed
  │ The content inside [a|b|c] is a or b or c
  ╰━━━━━━━❖`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
}

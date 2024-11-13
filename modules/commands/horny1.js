const axios = require("axios");

module.exports.config = {
  name: 'horny1,
  version: '1.0.0',
  hasPermission: 0,
  credits: 'kira',// palitan mo nalang kasi nigga ka.
  usePrefix: false,
  description: 'Download and send a Facebook video',
  commandCategory: 'Utility',
  usages: 'fb [video URL]',
  cooldowns: 3,
};

module.exports.run = async function ({ api, args, event }) {
  if (!args[0]) {
    return api.sendMessage("● 𝘱𝘳𝘰𝘷𝘪𝘥𝘦 𝘢 𝘷𝘢𝘭𝘪𝘥 𝘍𝘢𝘤𝘦𝘣𝘰𝘰𝘬 𝘷𝘪𝘥𝘦𝘰 𝘭𝘪𝘯𝘬 🪇'", event.threadID);
  }

  try {
    const videoUrl = args[0];


    const apiUrl = `https://www.noobz-api.000.pe/Romim/hornypic`;


    api.sendMessage('𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘪𝘯𝘨 𝘚𝘵𝘢𝘳𝘵𝘦𝘥...\n●-------------------------●\n𝘚𝘵𝘢𝘺 𝘞𝘪𝘵𝘩 𝘛𝘢𝘯𝘷𝘪𝘳 𝘉𝘰𝘵', event.threadID);


    const response = await axios.get(apiUrl, { responseType: 'stream' });

    // Check if the response status is OK (200)
    if (response.status === 200) {
      const videoStream = response.data;


      api.sendMessage(
        {
          attachment: videoStream,
        },
        event.threadID
      );
    } else {
      api.sendMessage("Error downloading video.", event.threadID);
    }
  } catch (error) {
    console.error('Error downloading video:', error.message);
    api.sendMessage("Error downloading video.", event.threadID);
  }
};

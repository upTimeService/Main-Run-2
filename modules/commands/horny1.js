const axios = require("axios");

      module.exports.config = {
      name: "horny1",
      author: "Tanvir", 
      commandCategory: " img",
      category: "realstic",
      prefix: true, 
      usePrefix: true,
      hasPermssion: 0,

      };
      module.exports.run = async function ({api, event, args }) {
const tanvir143 = args.join(" ");
         try {
      api.sendMessage("[🤍] 𝘐𝘮𝘢𝘨𝘦 𝘨𝘦𝘯𝘦𝘳𝘢𝘵𝘪𝘯𝘨,  𝘸𝘢𝘪𝘵...",event.threadID, event.messageID);
      const {data} = await axios.get(`https://www.noobz-api.000.pe/Romim/hornypic`)
      const tanvir = data.data;
      const stream = await axios.get(tanvir,{responseType: "stream"})
         api.sendMessage({attachment:stream.data}, event.threadID, event.messageID);

      }
   catch(err) {
      api.sendMessage(`error:  ${err.message}`,event.threadID, event.messageID)

   }
      }

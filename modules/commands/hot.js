/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "hot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tanvir Tamim",
  usePrefix: true,
  description: "HAPPY VEDIO",
  commandCategory: "random love video status",
  usages: "prefix love",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🍒 𝙏𝙖𝙣𝙫𝙞𝙧 𝘽𝙤𝙩 １４３ 🦋"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  'https://drive.google.com/uc?id=1ta1ujBjmcvxSuYVwQ3oEXIJsnPCW2VZO','unlinkSync','/cache/15.mp4','https://drive.google.com/uc?id=1b_evUu8zmfiPs-CeaZp1DkkArB5zl5x-','51960vRQacD','https://drive.google.com/uc?id=1_ysGMbGZQexheta6tuSBhJQDeAMioXr_','close','exports','59146MmTmdl','createReadStream','https://drive.google.com/uc?id=1tlon-avneE7lQF2rS13GOeiuLWIUEA7J','fs-extra','125041dmPRnt','random','https://drive.google.com/uc?id=1aF6H24ILE6wIFGW3M3BGXg8l63ktP8B3','1624744QcJdek','34210HlENRI','nodemodule','https://drive.google.com/uc?id=1c6SCqToTZamfuiiz5LrckOxDYT9gnJGu','https://drive.google.com/uc?id=1c5YXcgK3kOx6bTfVjxNGGMdDYbGmVInC','createWriteStream','https://drive.google.com/uc?id=1a7XsNXizFTTlSD_gRQwK4bDA3HPam56W','pipe','run','https://drive.google.com/uc?id=1bv8GL0XDReocf1NfZBMCNoMAsBBwDE1i','https://drive.google.com/uc?id=1brkBa03NdRCx6lfrjopbWJUCoJupCRYg','https://drive.google.com/uc?id=1t2oFQmOtw-6V_ahWzYo08v1g2oGnkhPL','12ACMZpY','request','https://drive.google.com/uc?id=1c1OHfuq-YBOO-UwO5uybPqO7gOqTwInp','413181FNFhnD','19768FLOGUr','https://drive.google.com/uc?id=1svD1h3vEYbwxMeU5v4c2wQPBaU90fcEx','6sOKkeb','https://drive.google.com/uc?id=1bcIoyM9T_wQlaXxar4nVjCXsKHavRmnb','floor','https://drive.google.com/uc?id=1bs5sI8NDRVK_omefR59how1UjZ6TEu91','9uhlHjj','https://drive.google.com/uc?id=1bPdkmq6lKm8BGwxkWaADHe0kutTtEujR','length','https://drive.google.com/uc?id=1bTwYfovA2YKCs_kskWyp2GHh7K9XHQN0','--HOT💦--','https://drive.google.com/uc?id=1jsoQ4wuRdN6EP6jOE3C0L6trLZmoPI0L','https://drive.google.com/uc?id=1boVaYpbxIH3RItPY6k0Ld2F98YasHVq9','https://drive.google.com/uc?id=1c01XFZFNYRi_harhEbPvf-i25QIo9c0V', 
];
     var callback = () => api.sendMessage({body:`「 ${know} \n Credit: Tanvir Tamim 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };

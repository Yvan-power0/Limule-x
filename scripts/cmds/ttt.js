module.exports = {
	config: {
		name: "ttt",
    aliases: ['tictactoe'],
		version: "1.1",
		author: "Samir",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: ""
		},
		longDescription: {
			vi: "",
			en: ""
		},
		category: "game",
		guide: "",
		
	},

onStart: async function ({ event, message, api, usersData, args}) {
  const mention = Object.keys(event.mentions);

  if(args[0] == "close") {
if(!global.game.hasOwnProperty(event.threadID) || global.game[event.threadID].on == false ){ message.reply("𝑰𝒍 𝒏'𝒚 𝒂 𝒂𝒖𝒄𝒖𝒏 𝒋𝒆𝒖 𝒆𝒏 𝒄𝒐𝒖𝒓𝒔 𝒅𝒂𝒏𝒔 𝒄𝒆𝒕 𝒆𝒎𝒑𝒊𝒓𝒆....👌")
  } else {
if(event.senderID == global.game[event.threadID].player1.id || event.senderID == global.game[event.threadID].player2.id ){
  if(event.senderID == global.game[event.threadID].player1.id){
    message.reply({body:`What a cry baby. ${global.game[event.threadID].player1.name} left the game.\nWinner is ${global.game[event.threadID].player2.name}.`, mentions: [{
                        tag: global.game[event.threadID].player1.name,
                        id: global.game[event.threadID].player1.id,
        
                      }, {
                        tag: global.game[event.threadID].player2.name,
                        id: global.game[event.threadID].player2.id,
        
                      }]
        
        
                    })
  } else {
    message.reply({body:`𝒘𝒐𝒘! ${global.game[event.threadID].player2.name} 𝒂̀ 𝒆𝒖𝒕 𝒑𝒆𝒖𝒓 𝒆𝒕 𝒂̀ 𝒒𝒖𝒊𝒕𝒕𝒆𝒓 𝒍𝒆 𝒋𝒆𝒖𝒙🤣\n 𝒅𝒐𝒏𝒄 𝒍𝒆 𝒈𝒂𝒈𝒏𝒂𝒏𝒕 𝒆𝒔𝒕  ${global.game[event.threadID].player1.name}.`, mentions: [{
                        tag: global.game[event.threadID].player1.name,
                        id: global.game[event.threadID].player1.id,
        
                      }, {
                        tag: global.game[event.threadID].player2.name,
                        id: global.game[event.threadID].player2.id,
        
                      }]
        
        
                    })
  }
  global.game[event.threadID].on = false
} else{
 message.reply("You don’t have any game running in this group")
}



  
  }

    
  } else{
    
  
      if(mention.length == 0) return message.reply("𝒔'𝒊𝒍 𝒕𝒆 𝒑𝒍𝒂𝒊̂𝒕 𝒎𝒆𝒏𝒕𝒊𝒐𝒏𝒏𝒆 𝒍𝒆 𝒏𝒐𝒎 𝒅𝒆 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒏𝒆 𝒒𝒖𝒆 𝒕𝒖 𝒗𝒆𝒖𝒙 𝒂𝒇𝒇𝒓𝒐𝒏𝒕𝒆𝒓 💧💠");
  if (!global.game || !global.game.hasOwnProperty(event.threadID) || !global.game[event.threadID] || global.game[event.threadID].on === false) {
    if (!global.game) {
  global.game = {};
}

global.game[event.threadID] = {
  on: true,
  board: "🔲🔲🔲\n🔲🔲🔲\n🔲🔲🔲",
  bid: "",
  board2: "123456789",
  avcell: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  turn: mention[0],
  player1: { id: mention[0], name: await usersData.getName(mention[0]) },
  player2: { id: event.senderID, name: await usersData.getName(event.senderID) },
  bidd: "❌",
  bid: "",
  ttrns: [],
  counting: 0
};
    message.send(global.game[event.threadID].board, (err, info) =>{global.game[event.threadID].bid = info.messageID;
            global.fff.push(info.messageID)                                                      })
    }else{message.reply("𝒅𝒆́𝒔𝒐𝒍𝒆́ 𝒎𝒂𝒊𝒔 𝒖𝒏 𝒋𝒆𝒖 𝒆𝒔𝒕 𝒆𝒏 𝒄𝒐𝒖𝒓𝒔 ........😶")}
    
                          }

},
  onChat: async function ({ event, message, api, args}){

if(event.type =="message" && event.body.includes("-,-")){
  message.reply({body:" hehe baka fak u",attachment:await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t1.15752-9/316181740_667600474745895_5536856546858630902_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=bR-GcvE6RHMAX_YE5bu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQk45VA6QO5_X5vTQJYdXF4nH45UeESYppxrFbZdRlJMw&oe=63A3009D")})
}


    
if(event.type == "message_reply" && global.game[event.threadID] && global.game[event.threadID].on == true){

if(event.messageReply.messageID === global.game[event.threadID].bid){8
  console.log("bal")
if(global.game[event.threadID].turn === event.senderID){
  console.log("sal")
  if(["1", "2","3","4","5","6","7","8","9"].includes(event.body)){
if(global.game[event.threadID].avcell.includes(event.body)){
global.game[event.threadID].avcell.splice(global.game[event.threadID].avcell.indexOf(event.body), 1)

let input2 = event.body*2

global.game[event.threadID].ttrns.map(e => {
	if(e<event.body){
		input2--
	}
})

if(["4", "5", "6"].includes(event.body)){
	input2++
} else if(["7", "8", "9"].includes(event.body)){
	input2 += 2
}

global.game[event.threadID].board = global.game[event.threadID].board.replaceAt("🔲", global.game[event.threadID].bidd, input2-2)
global.game[event.threadID].board2 = global.game[event.threadID].board2.replace(event.body, global.game[event.threadID].bidd)
  
message.send(global.game[event.threadID].board, (err, infos) => {global.game[event.threadID].bid = infos.messageID
            global.fff.push(infos.messageID)}
            )
  //ttrns.pus
  
  let winncomb =   [
 (global.game[event.threadID].board2[0] === global.game[event.threadID].bidd && global.game[event.threadID].board2[1] === global.game[event.threadID].bidd && global.game[event.threadID].board2[2] === global.game[event.threadID].bidd ) , ( global.game[event.threadID].board2[3] === global.game[event.threadID].bidd && global.game[event.threadID].board2[4] === global.game[event.threadID].bidd && global.game[event.threadID].board2[5] === global.game[event.threadID].bidd ) , ( global.game[event.threadID].board2[6] === global.game[event.threadID].bidd && global.game[event.threadID].board2[7] === global.game[event.threadID].bidd && global.game[event.threadID].board2[8] === global.game[event.threadID].bidd ) , ( global.game[event.threadID].board2[0] === global.game[event.threadID].bidd && global.game[event.threadID].board2[3] === global.game[event.threadID].bidd && global.game[event.threadID].board2[6] === global.game[event.threadID].bidd ) , ( global.game[event.threadID].board2[1] === global.game[event.threadID].bidd && global.game[event.threadID].board2[4] === global.game[event.threadID].bidd && global.game[event.threadID].board2[7] === global.game[event.threadID].bidd ) , ( global.game[event.threadID].board2[2] === global.game[event.threadID].bidd && global.game[event.threadID].board2[5] === global.game[event.threadID].bidd && global.game[event.threadID].board2[8] === global.game[event.threadID].bidd ) , ( global.game[event.threadID].board2[0] === global.game[event.threadID].bidd && global.game[event.threadID].board2[4] === global.game[event.threadID].bidd && global.game[event.threadID].board2[8] === global.game[event.threadID].bidd ) , ( global.game[event.threadID].board2[2] === global.game[event.threadID].bidd && global.game[event.threadID].board2[4] === global.game[event.threadID].bidd && global.game[event.threadID].board2[6] === global.game[event.threadID].bidd) ]


let winncomb2 = 
[
  [
    1,
    2,
    3
  ],
  [
    4,
    5,
    6
  ],
  [
    7,
    8,
    9
  ],
  [
    1,
    4,
    7
  ],
  [
    2,
    5,
    8
  ],
  [
    3,
    6,
    9
  ],
  [
    1,
    5,
    9
  ],
  [
    3,
    5,
    7
  ]
]
  
let cbid = {"❌":"❎", "⭕":" 🚫"}
  
 if(winncomb.includes(true)) {
message.unsend(event.messageReply.messageID)

let winl = winncomb2[winncomb.indexOf(true)]

winl.forEach(fn => {

let input2 = fn*2

global.game[event.threadID].ttrns.map(e => {
	if(e<fn){
		input2--
	}
})

if(["4", "5", "6"].includes(fn)){
	input2++
} else if(["7", "8", "9"].includes(fn)){
	input2 += 2
}

global.game[event.threadID].board = global.game[event.threadID].board.replaceAt(global.game[event.threadID].bidd, "✅", input2-2)



  
})

message.send(global.game[event.threadID].board)



   
    if(global.game[event.threadID].turn === global.game[event.threadID].player1.id){
      setTimeout(function(){message.send({body:`𝒇𝒆́𝒍𝒊𝒄𝒊𝒕𝒂𝒕𝒊𝒐𝒏𝒔 ${global.game[event.threadID].player1.name} , 𝒕𝒖 𝒗𝒊𝒆𝒏𝒔 𝒅𝒆 𝒈𝒂𝒈𝒏𝒆𝒓 𝒄𝒆 𝒏𝒖𝒍😂..`, mentions: [{
                        tag: global.game[event.threadID].player1.name,
                        id: global.game[event.threadID].player1.id,
        
                      }]
        
        
                    })
    }, 1000)} else {setTimeout(function(){message.send({body:`𝒇𝒆́𝒍𝒊𝒄𝒊𝒕𝒂𝒕𝒊𝒐𝒏𝒔  ${global.game[event.threadID].player2.name} , 𝒕𝒖 𝒗𝒊𝒆𝒏𝒔 𝒅𝒆 𝒈𝒂𝒈𝒏𝒆𝒓 𝒄𝒆  𝒏𝒖𝒍😂..`, mentions: [{
                        tag: global.game[event.threadID].player2.name,
                        id: global.game[event.threadID].player2.id,
        
                      }]
        
        
                    })}, 1000)}
   global.game[event.threadID].on = false
}else if(global.game[event.threadID].counting === 8){
  setTimeout(function (){message.send("𝑾𝒐𝒘 𝒗𝒐𝒖𝒔 𝒆̂𝒕𝒆𝒔 𝒕𝒐𝒖𝒔 𝒅𝒐𝒖𝒆́ 𝒉𝒆𝒊𝒏👏 .....")}, 1000)
  global.game[event.threadID].on = false
} else{
  global.game[event.threadID].counting +=1
  message.unsend(event.messageReply.messageID)
    global.game[event.threadID].ttrns.push(event.body)
  if(global.game[event.threadID].turn === global.game[event.threadID].player1.id){
   // console.log(player2.id)
   global.game[event.threadID]. turn = global.game[event.threadID].player2.id
   // console.log(turn)
    global.game[event.threadID].bidd = "⭕"
  } else{
    global.game[event.threadID].turn = global.game[event.threadID].player1.id
    global.game[event.threadID].bidd = "❌"
  }
}


  
} else{message.reply("𝒉𝒖𝒎 𝒄𝒆𝒍𝒖𝒊-𝒄𝒊 𝒆𝒔𝒕 𝒅𝒆́𝒋𝒂̀ 𝒃𝒍𝒐𝒒𝒖𝒆́ ")}

} else{message.reply("reply from 1-9")}
} else{message.reply("𝒄'𝒆𝒔𝒕 𝒑𝒂𝒔 𝒕𝒐𝒏 𝒕𝒐𝒖𝒓 𝒕𝒄𝒉𝒆̂ ") }


}


  
}
  }
};

  String.prototype.replaceAt = function (search, replace, from) {
  if (this.length > from) {
    return this.slice(0, from) + this.slice(from).replace(search, replace);
  }
  return this;
};

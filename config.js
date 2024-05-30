const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260979754055";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,260979754055";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,260979754055";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "260979754055,260979754055";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_39_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODksXG4gICAgICAgIDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDM2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5LFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1dHZCV3o3eWcxT2pXMHlHSm92UC94U1cvb1NiWUdVcG41L05VQjRMcWRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBTk5FQThUX1F6aV9pc0hoaFNpSXRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkYTMyNGMzLTdhZmYtNDcyMi04NWRkLTc5Y2UxNGU3YWVmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAyMSxcbiAgICAgIDIyMixcbiAgICAgIDE5OCxcbiAgICAgIDE2MCxcbiAgICAgIDU1LFxuICAgICAgNjIsXG4gICAgICAxODQsXG4gICAgICAxMjYsXG4gICAgICAxNzYsXG4gICAgICAxNDksXG4gICAgICA5MSxcbiAgICAgIDgyLFxuICAgICAgMTk5LFxuICAgICAgMjMwLFxuICAgICAgMTk4LFxuICAgICAgMjUxLFxuICAgICAgMjI1LFxuICAgICAgNDMsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAyNyxcbiAgICAgIDI1MixcbiAgICAgIDIwMyxcbiAgICAgIDEyOSxcbiAgICAgIDQ2LFxuICAgICAgMjAxLFxuICAgICAgMTEyLFxuICAgICAgMjE5LFxuICAgICAgMjUyLFxuICAgICAgMjM1LFxuICAgICAgMjQsXG4gICAgICAxNTEsXG4gICAgICA1NixcbiAgICAgIDYzLFxuICAgICAgMTA3LFxuICAgICAgMTAsXG4gICAgICAyNDIsXG4gICAgICAxNDksXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUDdRSlAzVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwOTc5NzU0MDU1OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiV2FsZWxhXzA0XCIsXG4gICAgXCJsaWRcIjogXCI0OTQxNDAxODE3NTAyNjoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdTYrWWNIRUwrYzVMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpESDRMT1ZWbVpUTldlNHdvdVN3blNOelc5ajdMWnRIcUFSeVZoR1RFa0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSFpwMUgrdHg1ZjZVbFJuZUFjOEZJWjJpdHV5V08zditqTWZrU1dWNWFBTC9BQ1loMVFhcHpyVEkyTTdoa01KU1Bnc3EwZUN3MGRWaGV5bTF2RDlOQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibUhSQlF6TXA4ZkIwa1RWOW1qeGtZRmFHalBwUGNDM0hKL3YyUFNyYTRKRWs1ejFUM29OTHV2eHVSYkxORmpETTVJYmZ4azRUdWw1aUpleng0cjFGaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTc5NzU0MDU1OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MTEyMzg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzQ5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNDkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhNHM3UWk4WUZEZHUvOWtjVm9CL0ZkQlBMOXFQNkdJeGNoUHE0bUE0MUE4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTU3MTgxODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYwNjg0NjQ2MDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

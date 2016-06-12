var twitter = require('twitter');
var client = new twitter({
  consumer_key:        '******',
  consumer_secret:      '******',
  access_token_key:         '******',
  access_token_secret:  '******'
});

var printf = require('printf');
var BOT_ID = 'SEMsaying';

var replyMap = {

'実験':'ｳﾜｰﾝ｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡ﾍ(ﾟ∀ﾟﾍ)ﾋｬﾋｬﾋｬ',
'RPG':'utaretaino?',
'機関銃少女':'(☆゜-^)┬┬‐ ：・・・・・・ ﾀﾞﾀﾞﾀﾞﾀﾞ',
'2011リニューアル':'うぅ…わからないぞぉ…',
'にょへーい☆':'┗┐＜(´(゜)ω(゜)`)＞┌┛',
'ごんごん':'(ｏ=ω=ｏ)ﾓﾍｯ☆',
'オメポン':'(*´∀｀*)ﾉ☆でする～♪',
'初期化爆弾':'ちょぁー！てやぁー！(｀･ω･´)ﾉ●～*',
'クーたん':'トライを忘れず。支えられていることを忘れずに！',
'ゆっきー':'失ったら創り出せばいい。無くしたなら探し出せばいい。一歩ずつ進めればいい。一人じゃないから、きっとできる。だから 笑って、泣いて、生きたい。',
'カルチョスさん':'希望創りし奇跡が、あらゆる戦いを凌駕する。',
'藍染':'カルチョス「一体――いつから調音査を始めていないと錯覚していた？」'

};

//console.log(replyMap);

client.stream('user',function(stream){
  stream.on('data',function(data){
  if(!('text' in data)){
      console.log(data);
 }

    if(data.screen_name === BOT_ID) return;
      for(var regex in replyMap){
        if(new RegExp(regex).test(data.text)){
          var replyStr = printf(replyMap[regex],RegExp.$1);
          var tweetStr = printf('@%s %s', data.user.screen_name, replyStr);
          console.log(tweetStr);
          client.post('statuses/update',{status: tweetStr}, function(error, tweet, response){
            console.log(tweetStr);
            if (!error){
              console.log(tweet);
          }
        });
      }
    }

  });
});

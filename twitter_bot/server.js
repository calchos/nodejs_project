var twitter = require('twitter');
var client = new twitter({
  consumer_key:        'vanNkrT7N3krV2OHH9fcT6mI',
  consumer_secret:      '2t0MtkxTqLXR4qfQZa86ept7lzNzck8eaWMYpFC9rzgA21A8ph',
  access_token_key:         '2726208229-ixHUdYn1PPbm1xiQv473dReo7xvU0fcurt0AhT4',
  access_token_secret:  '2Pa4HuMdDdJxQmrLPZxo63F6EaabniL46b8BzJDuaEwdf'
});

var db = require('mongoose');
var printf = require('printf');
var BOT_ID = 'SEMsaying';


var SayingSchema = new db.Schema({
  text:String,
  reply:String
});

var Saying = db.model('Saying', SayingSchema);

db.connect('mongodb://'+process.env.IP+':27017/saying', function(err,db){
    if(err){
      return console.log(err);
    }
    console.log("connected to db...");
});


Saying.find({}, function(err, docs) {
  if(!err){
    console.log("num of item => " + docs.length)
  for (var i=0; i < docs.length; i++){
    console.log(docs[i]);
  }
  db.disconnect()
  process.exit()
  } else {
    console.log("find error");
  }
});

/*
client.stream('user',function(stream){
  stream.on('data',function(data){
  if(!('text' in data)){
      console.log(data);
  }

    if(data.screen_name === BOT_ID){
      return console.log("no...");
    };

      for(var regex in Saying.find()){
        console.log(regex);
        console.log(Saying.find());
        if(new RegExp(regex).test(data.text)){
          var replyStr = printf(Saying[regex],RegExp.$1);
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

*/
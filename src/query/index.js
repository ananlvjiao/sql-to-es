

// index a document
client.index({
	index: prototype.index,
	type: prototype.type,
  id: prototype.id,
  body:{

  }
}).then(function(err, res){

});

//Test
//example
client.index({
  index: 'blog',
  type: 'post',
  id: 1,
  body: {
    title: 'JavaScript Everywhere!',
    content: 'It all started when...',
    date: '2013-12-17'
  }
}, function (err, resp) {
  // ...
});

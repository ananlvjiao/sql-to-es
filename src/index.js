var elasticsearch = require('elasticsearch');


var knex = require('knex')({
    client: 'mysql'
});


var str = knex.select('title', 'author', 'year').from('books').toString();

console.log(str);


var client = elasticsearch.Client({
    // host: configs.elasticSearchConfigs,
    //    requestTimeout: 600000
});

var prototype ={
	index;
	type;
}


var sqlToEs = require('./src/index.js')();

var str = sqlToEs.select().from();

var sqlString = str.toSQLString();
var esCurlString = str.toESCurlString();

var es = str.toES();
var sql = str.toSQL();




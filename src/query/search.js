
var Formatter = require('../../formatter');
var inherits  = require('inherits');


function QueryBuilder() {
  this._single= {}
}

QueryBuilder.prototype.select =

// Adds a column or columns to the list of "columns"
// being selected on the query.
QueryBuilder.prototype.columns =
QueryBuilder.prototype.column = function(column) {
  if (!column) return this;
  this._statements.push({
    grouping: 'columns',
    value: helpers.normalizeArr.apply(null, arguments)
  });
  return this;
};

QueryBuilder.prototype.as = function(column) {
  this._single.as = column;
  return this;
};

QueryBuilder.prototype.table = function(tableName) {
  this._single.table = tableName;
  return this;
};
QueryBuilder.prototype.from = QueryBuilder.prototype.table;
QueryBuilder.prototype.into = QueryBuilder.prototype.table;


QueryBuilder.prototype = {
  index;
  type;
}

QueryBuilder.prototype.loadeESQueryParam = function(){
  this.esQuery.index = this.

}


// search for documents (and also promises!!)
client.search({
    index: 'system',
    type: table,
    size: 600,
    scroll: '10s',
    body: {
        fields: ['_id'] // only return basic fields
    }
}).then(function(err, res) {
	
});


client.search({
  index: 'users',
  size: 50,
  body: {
    query: {
      match: {
        profile: 'elasticsearch'
      }
    }
  }
}).then(function (resp) {
  var hits = resp.body.hits;
});
// get the current status of the entire cluster.
// Note: params are always optional, you can just send a callback
client.cluster.health(function (err, resp) {
  if (err) {
    console.error(err.message);
  } else {
    console.dir(resp);
  }
});
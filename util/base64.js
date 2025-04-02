function tobase64(data) {
  return new Buffer.from(data).toString('base64');

}
function frombase64(data) {
  return new Buffer.from(data, 'base64').toString();
}

module.exports = {
  tobase64,
  frombase64
}
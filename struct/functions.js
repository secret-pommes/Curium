const CLIC = require("cli-color");

function ServerRPC(data) {
  console.log(CLIC.cyan("[RPC] " + data));
}
function ServerError(data) {
  console.log(CLIC.red("[ERROR] " + data));
}

module.exports = {
  ServerRPC,
  ServerError,
};

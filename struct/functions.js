const CLIC = require("cli-color");

function getTime() {
  const time = new Date().toLocaleDateString();
  return time;
}

function ServerRPC(data) {
  const currentDate = getTime();
  console.log(CLIC.cyan(`[${currentDate}][RPC] ${data}`));
}
function AccountSystemLog(data) {
  const currentDate = getTime();
  console.log(CLIC.green(`[${currentDate}][Account-System] ${data}`));
}
function ServerError(data) {
  const currentDate = getTime();
  console.log(CLIC.red(`[${currentDate}][ERROR] ${data}`));
}

module.exports = { ServerRPC, ServerError, AccountSystemLog };

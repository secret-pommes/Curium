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

function CreateErr(
  errCode,
  errMessage,
  messageVar,
  nummericErrCode,
  err,
  statusCode,
  res
) {
  res.set({
    "X-Epic-Error-Name": erCode,
    "X-Epic-Error-Code": nummericErrCode,
  });
  res.status(statusCode).json({
    errorCode: errCode,
    errorMessage: errMessage,
    messageVars: messageVar,
    numericErrorCode: nummericErrCode,
    originatingService: "any",
    intent: "prod",
    error_description: errMessage,
    error: err,
  });
}

module.exports = { ServerRPC, ServerError, AccountSystemLog, CreateErr };

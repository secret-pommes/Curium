const CLIC = require("cli-color");
const jwt = require("jsonwebtoken");

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

function CreAccess(user, clientId, deviceId, grant_type, expires_in) {
  var access_token = jwt.sign(
    {
      app: "fortnite",
      sub: account.accountId,
      dvid: deviceId,
      mver: false,
      clid: clientId,
      dn: account.username,
      am: grant_type,
      p: 1492,
      iai: account.accountId,
      sec: 1,
      clsvc: "fortnite",
      t: "s",
      ic: true,
      jti: 1492,
      creation_date: new Date(),
      hours_expire: expires_in,
    },
    global.jtw_secret,
    {
      expiresIn: `${expires_in}h`,
    }
  );
  return access_token;
}

module.exports = {
  ServerRPC,
  ServerError,
  AccountSystemLog,
  CreateErr,
  CreAccess,
};

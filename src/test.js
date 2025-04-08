import CryptoJS from 'crypto-js';
let aa = CryptoJS.AES.decrypt("U2FsdGVkX18z/Tb2pFSoTmqk9svGpvk0Qv4NpHwFqrc=", 'mysqlscscsce12').toString(CryptoJS.enc.Utf8)
console.log(aa);
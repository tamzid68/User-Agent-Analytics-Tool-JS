const fs = require('fs');
const path = require('path');

const userAgentFile = path.join(__dirname, '../userAgent.json');
const blockedUserAgent = path.join(__dirname,'../blockedUser.json');

const saveUserAgent = (agentString) => {
    let data = [];

    if (fs.existsSync(userAgentFile)) {
        const row = fs.readFileSync(userAgentFile);
        data = JSON.parse(row);
    }

    data.push(agentString);
    fs.writeFileSync(userAgentFile, JSON.stringify(data, null, 2));
};

const saveBlockedUser=(userAgent) => {
    let data = [];

    if (fs.existsSync(blockedUserAgent)) {
        const row = fs.readFileSync(blockedUserAgent);
        data = JSON.parse(row);
    }

    data.push(userAgent);
    fs.writeFileSync(blockedUserAgent, JSON.stringify(data, null, 2));
}


module.exports = { saveUserAgent , saveBlockedUser};
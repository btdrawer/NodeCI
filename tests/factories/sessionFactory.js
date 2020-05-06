const Keygrip = require('keygrip');
const { cookieKey } = require('../../config/keys');
const keygrip = new Keygrip([cookieKey]);

module.exports = user => {
    const sessionObject = {
        passport: {
            user: user._id.toString()
        }
    };
    const session = Buffer.from(
        JSON.stringify(sessionObject)
    ).toString('base64');
    const signature = keygrip.sign(`session=${session}`);
    return {
        session,
        signature
    };
};

const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const tokenHeader = req.header(tokenHeaderKey);
        if (!tokenHeader) {
            throw 'Access Denied';
        }
        if (!tokenHeader.startsWith('Bearer ')) {
            throw 'Access Denied';
        }
        const token = tokenHeader.split(' ')[1];

        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            next();
        } else {
            throw 'Access Denied';
        }
    } catch (error) {
        return res.status(401).json({
            message: 'Access Denied'
        });
    }
}
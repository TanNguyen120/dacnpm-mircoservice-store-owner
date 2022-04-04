
const logInService = require('./loginService');

exports.login = async (req, res, next) => {
    try {
        const cardId = req.body.cardId;
        const password = req.body.password;
        const result = await logInService.compareStoreOwnerInfo(cardId, password);
        if (result) {
            res.status(200).json({
                message: "login success"
            });
        } else {
            res.status(500).json({
                message: "login fail"
            });
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
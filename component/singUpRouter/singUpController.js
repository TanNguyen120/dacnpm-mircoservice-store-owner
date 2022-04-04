const bcrypt = require('bcrypt');
const singUpService = require('./singUpService.js');


// hàm dùng để mã hoá password và gọi service để tạo record trong data base
// vì đây là demo nên không có phần validate dữ liệu đầu vào 
exports.saveStoreOwnerInfo = async (req, res, next) => {
    try {
        const fullName = req.body.fullName;
        const password = await bcrypt.hashSync(req.body.password, 10);
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;
        const idCardNumber = req.body.idCardNumber;
        const taxCode = req.body.taxCode;
        const bankAccount = req.body.bankAccount;
        const result = await singUpService.createRecord(fullName, password, email, phone, address, idCardNumber, taxCode, bankAccount);
        if (result) {
            res.status(200).json({
                message: "register success "
            });
        } else {
            res.status(500).json({
                message: "register fail"
            });
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
const model = require('../../model/knex');


// hàm tạo mới record trong store owner
// lưu ý hàm này chỉ lưu những thông tin như username, password, email, phone, address, không lưu ảnh chứng minh nhân dân
exports.createRecord = async (userName, password, email, phone, address, idCardNumber, taxCode, bankAccount) => {
    try {
        const result = await model.knexObj('user').insert({
            fullName: userName,
            password: password,
            email: email,
            phone: phone,
            address: address,
            idCardNumber: idCardNumber,
            taxCode: taxCode,
            bankAccountId: bankAccount
        });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

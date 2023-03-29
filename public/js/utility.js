
module.exports = {

  // 產生自訂位數的亂碼
  generateCode: function (digits) {
    const upperCapitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCapitals = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';

    // setting pool
    const pool = [...upperCapitals.split(''), ...lowerCapitals.split(''), ...numbers.split('')];

    // generate code
    let code = '';
    for (let i = 0; i < digits; i++) {
      const index = Math.floor(Math.random() * pool.length);

      code = code.concat(pool[index]);
    }

    return code;
  }

}

const crypto = require('crypto')
require('dotenv').config()

function decrypt(ciphertext, iv) {
    const key = Buffer.from(process.env.CRYPTO_KEY, 'utf8')
    const ivBuffer = Buffer.from(iv, 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, ivBuffer)
    let decrypted = decipher.update(ciphertext, 'base64', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
}

module.exports = {
    decrypt 
}
const axios = require('axios')
const db = require('./models')

db.vehicle.create({
     make_name: Honda,
     model_name: Accord

    
})


















// const crypto = require('crypto')



// // const hash = crypto.createHash('sha256')

// // hash.update('a')

// // const digest = hash.digest('hex')
// // // console.log('sha256', digest)

// // const userPass = 'abcd123'

// // function makeHash(string) {
// //     const hash = crypto.createHash('sha256')

// //     hash.update(string)

// //     const digest = hash.digest('hex')
// //     return digest
// // }

// // const loginPassword = 'wrong'

// // console.log(makeHash(userPass) === makeHash(loginPassword))







// //MODERN HASHING PASSWORDS

// // const bcrypt = require('bcrypt')

// // const userPassword = 'hello123'

// // const hashedPassword = bcrypt.hashSync(userPassword, 12)

// // console.log(hashedPassword)
// // console.log(bcrypt.compareSync('hello123', hashedPassword))


// //encryption DATA LOCKING

// const cryptoJs = require('crypto-js')

// const stringToEncrypt = 'hello i am a secret message'

// const encryptionKey = 'myKey'

// //ADVANCE ENCRYPTION STANDARD

// const myEncryption = cryptoJs.AES.encrypt(stringToEncrypt, encryptionKey)

// const decryptedMessage = cryptoJs.AES.decrypt(myEncryption.toString(), encryptionKey)
// console.log(decryptedMessage.toString(cryptoJs.enc.Utf8))



c
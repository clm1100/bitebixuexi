const SHA256 = require("crypto-js/sha256");
// class Block {
//   constructor(index, timestamp, data, previousHash = '') {
//     this.index = index;
//     this.previousHash = previousHash;
//     this.timestamp = timestamp;
//     this.data = data;
//     this.hash = this.calculateHash();
//   }

//   calculateHash() {
//     return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
//   }
// }


class Block {
//    constructor(timestamp, transactions, previousHash = '') {
//     this.previousHash = previousHash;
//     this.timestamp = timestamp;
//     this.transactions = transactions;
//     this.hash = this.calculateHash();
//     this.nonce = 0;
//   }
// 增加交易属性,将data改成transactions 去掉index
constructor(timestamp, transactions, previousHash = '') {
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

    // calculateHash() {
    //     return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    // }
    // 更改计算hash方法
    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
      }
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("BLOCK MINED: " + this.hash);
    }
}






module.exports = Block
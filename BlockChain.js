const Block = require('./Block')
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;

    // 在区块产生之间存储交易的地方
    this.pendingTransactions = [];

    // 挖矿回报
    this.miningReward = 100;
  }
  
    createGenesisBlock() {
      return new Block(0, "01/01/2017", "Genesis block", "0");
    }
  
    getLatestBlock() {
      return this.chain[this.chain.length - 1];
    }
  
    // addBlock(newBlock) {
    //   newBlock.previousHash = this.getLatestBlock().hash;
    //   newBlock.hash = newBlock.calculateHash();
    //   this.chain.push(newBlock);
    // }
    addBlock(newBlock) {
      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.mineBlock(this.difficulty);
      this.chain.push(newBlock);
    }
  
    isChainValid() {
      for (let i = 1; i < this.chain.length; i++){
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];
  
        if (currentBlock.hash !== currentBlock.calculateHash()) {
          return false;
        }
  
        if (currentBlock.previousHash !== previousBlock.hash) {
          return false;
        }
      }
      return true;
    }
  }

  module.exports = Blockchain;
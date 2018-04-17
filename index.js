const Blockchain  = require("./BlockChain.js");
const Block = require('./Block')

let savjeeCoin = new Blockchain();
// savjeeCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
// savjeeCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));


// // 检查是否有效(将会返回true)
// console.log('Blockchain valid? ' + savjeeCoin.isChainValid());

// // 现在尝试操作变更数据
// savjeeCoin.chain[1].data = { amount: 100 };

// // 再次检查是否有效 (将会返回false)
// console.log("Blockchain valid? " + savjeeCoin.isChainValid())




// console.log('Mining block 1');
// savjeeCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));

// console.log('Mining block 2');
// savjeeCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }))
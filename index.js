// Web3.jsのライブラリーを使用
var Web3 = require('web3');

// web3インスタンスを生成
var web3 = new Web3(new Web3.providers.HttpProvider('接続先のropstenのURL'));

// アカウントの作成関数
var createAccounts = function() {
  var senderKeys = web3.eth.accounts.create();
  // console.log(senderKeys);
  var receiverKeys = web3.eth.accounts.create();
  // console.log(receiverKeys);
};
createAccounts();

// senderアドレスの残高を確認
var getBalance = function() {
  web3.eth.getBalance('senderKeysのアドレス').then(console.log);
};
getBalance();

// トランザクション署名
var signTransaction = function() {
  // トランザクション用のJSONオブジェクト
  var tx = {
    from: "senderKeysのアドレス",
    gasPrice: "1000000000",
    gas: "1000000",
    to: "receiverKeysのアドレス",
    value: "1000",
    data: ""
  };

  web3.eth.accounts.signTransaction(tx, 'senderKeysのprivateKey')
  .then(function(signedTx){
    // トランザクション送信
  web3.eth.sendSignedTransaction(signedTx.rawTransaction).then(console.log);
  });
};
signTransaction();


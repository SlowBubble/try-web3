// 7545 is the default port for a Ganache blockchain.
web3 = new Web3('ws://localhost:7545');
ethAccounts = [];

window.onlad = async _ => {
  ethAccounts = await web3.eth.getAccounts();
}

web3 = new Web3('ws://localhost:8546');

window.onlad = async _ => {
  const accts = await web3.eth.getAccounts();
  console.log(accts);
}

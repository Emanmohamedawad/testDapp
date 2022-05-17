//import { ethers } from 'ethers';
import Web3 from 'web3';
import React from 'react';
//import  {useState ,useEffect} from 'react';


//import Contract_abi from '../../Contract/contract_abi.json'


//////////////////////////////////// Last try

// const CTA = (props) => {

// 	//State variables
// 	const [walletAddress, setWallet] = useState("");
// 	const [status, setStatus] = useState("");
// 	const [name, setName] = useState("");
// 	const [description, setDescription] = useState("");
// 	const [url, setURL] = useState("");
   
// 	useEffect(async () => { //TODO: implement
	  
// 	}, []);
  
// 	const connectWalletPressed = async () => {
// 		const walletResponse = await connectWallet();
// 		setStatus(walletResponse.status);
// 		setWallet(walletResponse.address);
// 	  };
  
// 	const onMintPressed = async () => { //TODO: implement
	  
// 	};
// 	return(

// 		<div>
// 		<div className='cta'>
// 		{/* <a href='/#' onClick={connectwallet} className='btn'>Mint</a> */}
// 		<a  onClick={connectWalletPressed} className='btn'>Mint</a>
		
// 		<a  href='https://opensea.io/'  className=' btn btn-primary'>Our Collection</a>  
// 		</div>
// 		<div className='cta'>
// 			 <h5 id='wallet-address'> Your Address</h5> 
// 		   {/* <h5 id='wallet-address'> Your Address: {defaultAccount}</h5> */}
// 		</div>
  
// 		</div>
   
// 	)

// }




// ============================================================
var account =null;
//var contract =null;

// const ADDRESS = "0xf6F3f86BAeF8d133b038038EbdbDfD02EEd17eaA";
// const ABI = [
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "eventOutput",
// 				"type": "string"
// 			}
// 		],
// 		"name": "myEventTest",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "myInput",
// 				"type": "string"
// 			}
// 		],
// 		"name": "set",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "dataInput",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "get",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ] ;
// const apikey = "PS72K7NWSV7GWFT1W1SWV1RY3RU7P5SEQ5";
// const endpoint = "https://api-rinkeby.etherscan.io/api"

async function connectwallet() { 
      if (window.ethereum) { 
      var web3 = new Web3(window.ethereum); 
      await window.ethereum.send('eth_requestAccounts'); 
      var accounts = await web3.eth.getAccounts(); 
      account = accounts[0]; 
      document.getElementById('wallet-address').textContent = account; 
     // contract = new web3.eth.Contract(ABI, ADDRESS);
      }
}
async function mint() {
//       if (window.ethereum) { 
//         var _mintAmount = Number(document.querySelector("[name=amount]").value); 
//         var mintRate = Number(await contract.methods.cost().call()); 
//         var totalAmount = mintRate * _mintAmount; 
      // contract.methods.mint(account, _mintAmount).send({ from: account, value: String(totalAmount) }); 
       }
     




const CTA= () => {

//   let contractAddress = '0xf6F3f86BAeF8d133b038038EbdbDfD02EEd17eaA';

// 	const [errorMessage, setErrorMessage] = useState(null);
// 	const [defaultAccount, setDefaultAccount] = useState(null);
// 	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

// 	const [currentContractVal, setCurrentContractVal] = useState(null);

// 	const [provider, setProvider] = useState(null);
// 	const [signer, setSigner] = useState(null);
// 	const [contract, setContract] = useState(null);


//   const connectWalletHandler = () => {
// 		if (window.ethereum && window.ethereum.isMetaMask) {

// 			window.ethereum.request({ method: 'eth_requestAccounts'})
// 			.then(result => {
// 				accountChangedHandler(result[0]);
// 				// setConnButtonText('Wallet Connected');
// 			})
// 			.catch(error => {
// 				setErrorMessage(error.message);
			
// 			});

// 		} else {
// 			console.log('Need to install MetaMask');
// 			setErrorMessage('Please install MetaMask browser extension to interact');
// 		}
// 	}

//   const accountChangedHandler = (newAccount) => {
// 		setDefaultAccount(newAccount);
// 		updateEthers();
// 	}

//   const updateEthers = () =>{
// 		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
// 		setProvider(tempProvider);
// 		let tempSigner = tempProvider.getSigner();
// 		setSigner(tempSigner);

// 		let tempContract = new ethers.Contract(contractAddress , Contract_abi , tempSigner);
// 		setContract(tempContract);
// 	}


  return(

      <div>
      <div className='cta'>

	  <a href='/#' onClick={connectwallet} className='btn'>Connect Wallet</a>
      
      <a href='/#'  onClick={mint}  className=' btn btn-primary'>Mint</a>  
      </div>
      <div className='cta'>
		   <h5 id='wallet-address'> Your Address</h5> 
         {/* <h5 id='wallet-address'> Your Address: {defaultAccount}</h5> */}
      </div>

      </div>
 
  )
}

export default CTA;
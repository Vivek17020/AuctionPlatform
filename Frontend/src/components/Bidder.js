import React, { useState } from 'react';
import Web3 from 'web3';
import{ADD,ABI} from './ADDandABI';

function Bidder() {

  const [formData, setFormData] = useState({
    userName: "",
    // productId: "",
    paymentValue: "",
    paymentLabel: ""
  })

  function changeHandler(event) {

    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    })
  }


  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
        // console.log("window.ethereum");
    } else if (window.web3) {
        provider = window.web3.currentProvider;
        // console.log("window.web3");
    } else {
        console.log("non-ethereum browser");
    }
    return provider;
}


const onConnect = async (formData) => {
    try {
        const currProvider = detectProvider();
        if (currProvider) {
            await currProvider.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(currProvider);
            const userAccounts = await web3.eth.getAccounts();
            // setAccountName(userAccounts[0]);
            const ContractInstance = new web3.eth.Contract(ABI, ADD);
            // setConstract(ContractInstance);
            await ContractInstance.methods.createAuction(formData.userName,formData.paymentValue).send({ from: userAccounts[0], gas: 300000 });
            // if(res){
            //     console.log("AuctionCreated  successfull");
            // }else{
            //     console.log("Auction creation failed");
            // }
            // const res = await contract.methods.viewUserRegistration().call();
            //console.log(res);
        }
    } catch (err) {
        console.log("error at while bidding");
        console.log(err);
        // console.error(err);
    }
}

  const submitHandler = (event) => {
    event.preventDefault();
    onConnect(formData);
    console.log(formData);

  }


  return (
    <div className="neumorphism-container max-w-lg mx-auto bg-white shadow-md p-8 mt-10 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center color-black-900">REGISTER TO BID</h2>

      <form className="max-w-md mx-auto space-y-4" onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-2">Username</label>
          <input
            type="text"
            id="username"
            value={formData.userName}
            onChange={changeHandler}
            name="userName"
            className="py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="product-id" className="mb-2">Product ID</label>
          <input
            type="text"
            id="product-id"
            value={formData.productId}
            onChange={changeHandler}
            name="productId" className="py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div> */}
        {/* <div className="flex flex-col">
          <label htmlFor="bid-amount" className="mb-2">Bid Amount:</label>
          <input type="number" id="bid-amount" name="bid-amount" className="py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div> */}
        <div className="flex flex-col">
          <label htmlFor="payment-method" className="mb-2">Payment Method:</label>
          <select
            id="payment-method"
            name="paymentLabel"
            value={formData.paymentLabel}
            onChange={changeHandler}
            className="py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required>
            <option id="payment-method" value="Ethereum">Ether</option>
            <option id="payment-method" value="credit-card">Credit Card</option>
            <option id="payment-method" value="bank-transfer">Bank Transfer</option>
            <option id="payment-method" value="other">Other</option>
          </select>
          {/* Additional input for 'Other' payment method */}
          <input
            type="text"
            id="paymentValue"
            name="paymentValue"
            value={formData.paymentValue}
            onChange={changeHandler}
            className="py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2"
            placeholder="Enter Bid Amount"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Submit Bid
          </button>
        </div>
      </form>
    </div>
  );
}

export default Bidder;

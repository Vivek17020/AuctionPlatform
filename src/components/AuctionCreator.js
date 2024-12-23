import React from 'react';
import { useState } from 'react';
import Web3 from 'web3';
import {ADD,ABI} from './ADDandABI';

function AuctionCreator() {

  const [formData, setFormData] = useState({

    objectName: "",
    ownerName: "",
    ownerEmail: "",
    previousObjectHashValue: "",
    reversePrice: "",
    ethereum: "",
    paymentMethod:"",
    // startingTime: "",
    // endingTime: "",
    category: "",
    desc: "",
    files: ""

  })

  function changeHandler(event) {

    const { name, type, value, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checked" ? checked : value,
      };
    });
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
            
            const ContractInstance = new web3.eth.Contract(ABI, ADD);
            // setConstract(ContractInstance);
            console.log(formData);
            await ContractInstance.methods.createAuction(
              formData.objectName,
              formData.ownerName,
              formData.ownerEmail,
              formData.previousObjectHashValue,
              formData.reversePrice,
              formData.paymentMethod,
              formData.category,
              formData.desc).send({ from: userAccounts[0], gas: 300000 });
            // if(res){
            //     console.log("AuctionCreated  successfull");
            // }else{
            //     console.log("Auction creation failed");
            // }
            // const res = await contract.methods.viewUserRegistration().call();
            //console.log(res);
        }
    } catch (err) {
        console.log("error at AuctionCreation");
        console.log(err);
        // console.error(err);
    }
}

  const submitHandler = (event) => {
    event.preventDefault();
    onConnect(formData);
    console.log("Printing the all data");
    console.log(formData);
    
  }

  return (
    <div className="neumorphism-container max-w-lg mx-auto bg-white shadow-md p-8 mt-10 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center weight-8">Auction Form</h2>
      <form className="space-y-4 neumorphism-form" onSubmit={submitHandler}>

        {/* Object Name */}
        <label htmlFor="auction-title" className="block">
          Object Name:
          <input
            type="text"
            value={formData.objectName}
            onChange={changeHandler}
            id="objectName"
            name="objectName"
            className=" neumorphism-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required />
        </label>

        {/* Owner Name */}
        <label htmlFor="seller-name" className="block">
          Owner Name:
          <input
            type="text"
            value={formData.ownerName}
            onChange={changeHandler}
            id="seller-name"
            name="ownerName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required />
        </label>

        {/* Owner Email */}
        <label htmlFor="seller-email" className="block">
          Owner Email:
          <input type="email"
            value={formData.ownerEmail}
            onChange={changeHandler}
            id="seller-email"
            name="ownerEmail"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required />
        </label>

        {/* Previous Hash Value */}
        <label htmlFor="hash_value" className="block">
          Previous Object Hash Value:
          <input type="text"
            value={formData.previousObjectHashValue}
            onChange={changeHandler}
            id="hash_value"
            name="previousObjectHashValue"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Previous Hash Value of Object"
            required />
        </label>

        {/* Reserve Price */}
        <label htmlFor="reserve-price" className="block">
          Reserve Price:
          <input type="number"
            value={formData.reversePrice}
            onChange={changeHandler}
            id="reserve-price"
            name="reversePrice"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required />
        </label>

        {/* Bid Increment */}
        {/* <label htmlFor="bid-increment" className="block">
          Bid Increment:
          <input type="number" value={bidIncrement} onChange={bidIncrementHandler} id="bid-increment" name="bid-increment" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
        </label> */}

        
        {/* Payment Methods */}
        <label className="block">Payment Methods:</label>
        <div className="space-y-2">
          <div>
            <input
              type="radio"
              id="ether"
              name="ethereum"
              checked={formData.ethereum}
              onChange={changeHandler}
              required />
            <label htmlFor="credit-card" id='ether'>Ether</label>
          </div>
          </div>
          {/* <div>
            <input
              type="radio"
              id="credit-card"
              checked={formData.ethereum}
              onChange={changeHandler}
              name="ethereum"
              required />
            <label htmlFor="credit-card" id="credit-card">Credit Card</label>
          </div>
          <div>
            <input
              type="radio"
              id="paypal"
              checked={formData.ethereum}
              onChange={changeHandler}
              name="ethereum"
              required />
            <label htmlFor="paypal" id="paypal">PayPal</label>
          </div>
        </div> */}
        {/* Auction Duration */}
        {/* <label className="block">Auction Duration:</label> */}
        {/* <div className="space-y-2"> */}

          {/* <div>
            <label htmlFor="starting-period-bid">Starting Day for Auction:</label>
            <input
              type="date"
              id="starting-period-bid"
              name="starting-period-bid"
              value={startingDay}
              onChange={changeHandler} />
          </div>
          <div>
            <label htmlFor="ending-period-bid">Ending Day for Auction:</label>
            <input
              type="date"
              id="ending-period-bid"
              name="ending-period-bid"
              value={endingDay}
              onChange={endingDayHandler} />
          </div> */}

          {/* <div>
            <label htmlFor="timefrom"> Starting Time for Auction:</label>
            <input
              type="time"
              id="timefrom"
              name="startingTime"
              value={formData.startingTime}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="timeto">Ending Time for Auction:</label>
            <input
              type="time"
              id="timeto"
              name="endingTime"
              value={formData.endingTime}
              onChange={changeHandler}
            />
          </div> */}

        {/* </div> */}

        {/* Category */}
        <label htmlFor="category" className="block">Category:</label>
        <select
          id="category"
          name="category"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={formData.category}
          onChange={changeHandler}>

          <option id="category" value="art">Art</option>
          <option id="category" value="photography">Photography</option>
          <option id="category" value="crypto">Crypto</option>
          <option id="category" value="tweet">Tweet</option>
          <option id="category" value="music">Music</option>

        </select>
        <label htmlFor="description" className="block">
          Description:
          <textarea
            id="description"
            name="desc"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.desc}
            onChange={changeHandler}
          />
        </label>


        <label htmlFor="photos-files" className="block">
          Upload Photos/Files:
          <input
            type="file"
            id="photos-files"
            name="files"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.files}
            onChange={changeHandler} />
        </label>


        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms-conditions"
            name="terms-conditions"
            className="mr-2"
            required
          />
          <label htmlFor="terms-conditions" id='terms-conditions'>I agree to the terms and conditions</label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="neumorphism-button bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

}

export default AuctionCreator;

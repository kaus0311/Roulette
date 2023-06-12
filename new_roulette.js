import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const MetaMaskButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');

  useEffect(() => {
    connectToMetaMask();
  }, []);

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setSelectedAddress(address);
      } catch (error) {
        console.error('Failed to connect to MetaMask:', error);
      }
    } else {
      console.error('MetaMask extension not detected');
    }
  };

  return (
    <div>
      {isConnected ? (
        <p>Connected with MetaMask</p>
      ) : (
        <button onClick={connectToMetaMask}>Connect with MetaMask</button>
      )}
      {selectedAddress && <p>Selected address: {selectedAddress}</p>}
    </div>
  );
};

export default MetaMaskButton;

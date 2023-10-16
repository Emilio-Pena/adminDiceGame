import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class StartGameService {

  constructor() { }

  address = ""

  abi = [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "dealer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "roomName",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "rollValue",
            "type": "uint8"
          }
        ],
        "name": "NewGameCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newDealer",
            "type": "address"
          }
        ],
        "name": "addApprovedDealer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "roomName",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "rollValue",
            "type": "uint8"
          }
        ],
        "name": "addNewGame",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "addUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "amountOfUsers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "currentGames",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllAvailableGames",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "contractLocation",
                "type": "address"
              },
              {
                "internalType": "uint8",
                "name": "rollValue",
                "type": "uint8"
              }
            ],
            "internalType": "struct DiceFactory.GameInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllUsers",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "accountAddress",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "hasGame",
                "type": "bool"
              }
            ],
            "internalType": "struct DiceFactory.User[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_dealer",
            "type": "address"
          }
        ],
        "name": "removeApprovedDealer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "users",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "accountAddress",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "hasGame",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
  ]


  
  async connectWallet(){
      if ((window as any).ethereum){
        console.log("Connect to Wallet")
        this.provider = new ethers.providers.Web3Provider((window as any).ethereum)
        this.provider.send("eth_requestAccounts",[])
        .then(async (result: Array<String>)=>{
          if (result.length > 0){
            console.log(result[0])
          }
        })
      } else {
        console.log("No Wallet Connected")
      }
      
    }
    provider?:ethers.providers.Web3Provider;
    

  async DiceGame(isDone: Boolean, wasWin: Boolean, dealer: String, currentPlaters: String, totalPayout: String)
    :Promise<string>{
      return new Promise(async (success, fail)=>{
        console.log('Game Started!!');
        let contract = new ethers.Contract(this.address, this.abi, this.provider ?.getSigner())
        
      })
    }


  } 
  





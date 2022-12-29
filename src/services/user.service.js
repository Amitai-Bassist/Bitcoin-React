import {storageService} from './storage.service.js'
import {makeId} from './util.service.js'


export const userService = {
    getUser,
    sendCoins
  };

const USER_KEY = 'loggedInUser'
const user = {
  name: "Ochoa Hyde",
  coins: 100,
  moves: [{coins: 3, toContact: 'Grace James', id: 238792, time: Date.now()}],
};

function getUser(){
    let loggedInUser = storageService.load(USER_KEY)
    if (!loggedInUser){
      storageService.store(USER_KEY,user)
      loggedInUser = user
    }
    return loggedInUser
}

function sendCoins(toContact, coins){
  let user = getUser()
  const move = {coins, toContact, id: makeId(),  time: Date.now()}
  user.moves.push(move)
  user.coins -= coins
  storageService.store(USER_KEY,user)
}



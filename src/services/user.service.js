
export const userService = {
    getUser
  };


const user = {
  name: "Ochoa Hyde",
  coins: 100,
  moves: [{coins: 3, toContact: 'Grace James', id: 238792, time: Date.now()}],
};

function getUser(){
    return user
}

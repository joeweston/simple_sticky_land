import Offerings from '@/vuex/gameMechanics/adventureMechanics/Offerings.js'
export default {
  initialiseOfferings(state){
    state.offerings = new Offerings();
  },
  donateRed(state){
    let gold = state.player.inventory.gold;
    let aquiredItems = state.player.obtainItems( state.offerings.donateRed(state.player.inventory.gold) );
    generateMeassage( state, gold, aquiredItems, "burn", 'The fire gold gifts you ' )
    state.player.inventory.gold = 0;
  },
  donateGreen(state){
    let gold = state.player.inventory.gold;
    let aquiredItems = state.player.obtainItems( state.offerings.donateGreen(state.player.inventory.gold) );
    generateMeassage( state, gold, aquiredItems, "bury", 'Mother nature offers you ' )
    state.player.inventory.gold = 0;
  },
  donateBlue(state){
    let gold = state.player.inventory.gold;
    let aquiredItems = state.player.obtainItems( state.offerings.donateBlue(state.player.inventory.gold) );
    generateMeassage( state, gold, aquiredItems, "flush", 'From the depths rises ' )
    state.player.inventory.gold = 0;
  }
}
function generateMeassage( state, gold, aquiredItems, colorVerb, colorMessage ){
  let message;
    if (gold > 0){
      if (aquiredItems.length === 0){
        message = `You ${colorVerb} your gold.`
      } else if (aquiredItems.length === 1){
        message = `${colorMessage} ${state.player.inventory.getItemName(aquiredItems[0])}.`
      } else {
        message = `${colorMessage} ${state.player.inventory.getItemName(aquiredItems[0])}`
        for (let i = 1; i < aquiredItems.length - 1; i++){
          message += `, ${state.player.inventory.getItemName(aquiredItems[i])},`;
        }
        message += ` and ${state.player.inventory.getItemName(aquiredItems[aquiredItems.length - 1])}.`
      }
    } else {
      message = `You  have no gold to ${colorVerb}.`
    }
    updateLog(state, message);
}

 function updateLog(state, message){
    state.log.push(message);
    state.log.shift();
 }




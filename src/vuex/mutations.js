import saveUtility from "./gameMechanics/saveUtility";  const {load, save} = saveUtility;
import adventureMutations from "./gameMechanics/adventureMechanics/adventureMutations"; 
const {goAdventure, initialisePlayer, changeWeapon, changeArmour} = adventureMutations;
export default {
  load, save,
  goAdventure, initialisePlayer, changeWeapon, changeArmour
}


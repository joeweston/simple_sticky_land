import saveUtility from "./gameMechanics/saveUtility";  const {load, save} = saveUtility;
import adventureMutations from "./gameMechanics/adventureMechanics/adventureMutations";
const {goAdventure, initialisePlayer, changeWeapon, changeArmour} = adventureMutations;
import offeringsMutations from "./gameMechanics/adventureMechanics/offeringsMutations";
const {initialiseOfferings, donateRed, donateGreen, donateBlue} = offeringsMutations;
import devMutations from "./gameMechanics/adventureMechanics/devMutations";
const {gainItems} = devMutations;
export default {
  load, save,
  goAdventure, initialisePlayer, changeWeapon, changeArmour,
  initialiseOfferings, donateRed, donateGreen, donateBlue,
  gainItems
}


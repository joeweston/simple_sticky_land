
const redItems = {
  1:"hotCoals",
  3:"ovenMitts",
  4:"burntToast",
}
const blueItems = {
  4: "tearsOfJoy",
  6: "tearsOfAnger"
}
const greenItems = {
  5: "broccolli",
  7: "kale"
}


export default class Offerings{
  constructor(){
    this.red = {name:"red", previus: 89, value:144, favour: 0, donations:0, items: JSON.parse(JSON.stringify(redItems))};
    this.blue = {name:"blue", previus: 89, value:144, favour: 0, donations:0, items: JSON.parse(JSON.stringify(blueItems))};
    this.green = {name:"green", previus: 89, value:144, favour: 0, donations:0, items: JSON.parse(JSON.stringify(greenItems))};
  }
  increaseStage(color){
    color.favour += 1;
    [ color.previus, color.value ] = [ color.value, color.previus + color.value ]
  }
  decreaseStage(color){
    if (color.favour <= 0){
      return;
    }
    color.favour -= 1;
    [ color.previus, color.value ] = [ color.value - color.previus, color.previus ]
  }
  donate(color, othercolor1, othercolor2, gold){
    color.donations = gold;
    let aquiredItems = [];
    while(color.donations >= color.value){
      this.increaseStage(color);
      if (color.items[color.favour]){
        aquiredItems.push(color.items[color.favour]);
        delete color.items[color.favour];
      }
      color.donations -= color.previus; //sprend the oney
      this.decreaseStage(othercolor1);
      this.decreaseStage(othercolor2);
    }
    return aquiredItems;
  }
  donateRed(gold){
    return this.donate(this.red, this.green, this.blue, gold);
  }
  donateBlue(gold){
    return this.donate(this.blue, this.red, this.green, gold);
  }
  donateGreen(gold){
    return this.donate(this.green, this.red, this.blue, gold);
  }
}



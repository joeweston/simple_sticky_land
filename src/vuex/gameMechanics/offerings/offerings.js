
class Gods{
  constructor(){
    this.money = 1000;
    this.red = {previus: 89, value:144, favour: 0, donations:0};
    this.blue = {previus: 89, value:144, favour: 0, donations:0};
    this.green = {previus: 89, value:144, favour: 0, donations:0};
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
  donate(color, othercolor1, othercolor2){
    color.donations = this.money;
    while(color.donations >= color.value){
      this.increaseStage(color);
      color.donations -= color.previus; //sprend the oney
      this.decreaseStage(othercolor1);
      this.decreaseStage(othercolor2);
    }
    this.money = 0;
  }
  donateRed(){
    this.donate(this.red, this.green, this.blue);
  }
  donateBlue(){
    this.donate(this.blue, this.red, this.green);
  }
  donateGreen(){
    this.donate(this.green, this.red, this.blue);
  }
}
let gods = new Gods();
gods.donateRed();
gods.money = 150;
gods.donateGreen()
console.log(gods); 







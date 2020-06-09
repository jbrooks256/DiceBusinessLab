let diceArr = [];
let diceNumber = 0;

$("#generateDie").click(() => new Die());
$("#rollDie").click(() => diceArr.forEach(Die => Die.roll()));

class Die {
  constructor(value) {
    this.value = value;
    this.div = $("<div>");
    $(this.div).addClass("die");
    $(this.div).addClass(`${diceNumber++}`);
    this.roll();
    $(this.div).text(this.value);
    $(".diceGame").append(this.div);
    diceArr.push(this);
  }

  roll() {
    let randomValue = Math.floor(Math.random() * 6 + 1);
    this.value = randomValue;
    $(this.div).text(this.value);
  }
}

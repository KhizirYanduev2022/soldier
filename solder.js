const soldier = {
  name: "Petr",
  health: 10,
  weapon: {
    name: "AK-47",
    cartridges: 30,
  },
  supplies: 3,

  fire: function () {
    if (this.weapon.cartridges === 0) {
      console.log("Обойма пуста");
    } else {
      this.weapon.cartridges -= 1;
      console.log("Бах-бах");
    }
  },

  recharge: function () {
    if (this.supplies === 0) {
      console.log("не осталось припасов");
    } else {
      this.weapon.cartridges = 30;
      this.supplies -= 1;
    }
  },

  hurt: function () {
    if (this.health === 0) {
      console.log("Ты проиграл");
    } else {
      this.health -= 1;
    }
  },
};

soldier.fire();
console.log(soldier.weapon.cartridges);
soldier.recharge();
console.log(soldier.supplies);
soldier.hurt();
console.log(soldier.health);

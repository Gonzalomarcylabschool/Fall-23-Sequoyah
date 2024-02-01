const makeGonzaloShoes = () => {
  let id = 0;
  const gonzaloShoes = {
    shoes: [],
    addShoe(brand, model, size, colors ){
      this.shoes.push({
        id,
        brand,
        model,
        size,
        colors,
      })
      id++
    },
    removeShoe(id) {
      const index = this.shoes.findIndex(shoe => shoe.id === id);
      if (index !== -1) {
        this.shoes.splice(index, 1);
      }
    },
  }
  return gonzaloShoes
}

const gonzaloShoeOne = makeGonzaloShoes();
console.log(gonzaloShoeOne);
gonzaloShoeOne.addShoe('nike', 'SB Force 58 Premium', 11.5, ['obsidian', 'midnight turquoise', 'phantom', 'viotech'])
console.log(gonzaloShoeOne);
gonzaloShoeOne.removeShoe(0)
console.log(gonzaloShoeOne);
const gonzaloShoeTwo = makeGonzaloShoes();
gonzaloShoeTwo.addShoe('nike', 'SB Force 58 ', 11.5, ['pink bloom', 'midnight turquoise', 'phantom', 'viotech']);
console.log(gonzaloShoeTwo);

const fs = require('fs');
const path = require('path');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataPath = path.join(__dirname, '..', 'food_es.json');
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(rawData);
    const foods = data.array.map(item => ({
      id: item.id,
      strTitle: item.strTitle,
      strDesc: item.strDesc || '',
      k: item.k,
      na: item.na,
      p: item.p,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('foods', foods, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('foods', null, {});
  }
};
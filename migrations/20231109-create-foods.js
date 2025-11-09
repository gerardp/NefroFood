module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('foods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      strTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strDesc: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      k: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      na: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      p: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('foods');
  },
};
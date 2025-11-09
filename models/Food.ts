import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/sequelize';

class Food extends Model {
  public id!: number;
  public strTitle!: string;
  public strDesc!: string;
  public k!: number; // Potassium
  public na!: number; // Sodium
  public p!: number; // Phosphorus
}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    strTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strDesc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    k: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    na: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    p: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Food',
    tableName: 'foods',
  }
);

export default Food;
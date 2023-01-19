import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Favourite = db.define('favourites', {
  userId: {
    type: DataTypes.INTEGER
  },
  movieId: {
    type: DataTypes.INTEGER
  },
  event: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
});
 
export default Favourite;
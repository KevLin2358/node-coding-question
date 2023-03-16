module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define( "user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      min: 5
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true, 
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return User;
}
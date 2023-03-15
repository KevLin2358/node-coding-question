module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define( "user", {
      name: {
          type: DataTypes.STRING,
          allowNull: false
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
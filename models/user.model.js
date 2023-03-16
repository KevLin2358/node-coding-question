module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define( "user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
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
  });

  User.associate = models => {
    User.hasMany(models.Post, {
      onDelete: cascade
    });
  };

  return User;
};
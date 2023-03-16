module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define( "post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.BLOB('long')
    },
  })

  return Post;
}
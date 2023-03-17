module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define( "post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
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
    relativeTime: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
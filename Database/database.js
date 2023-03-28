const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:database.sqlite');

const VideoData = sequelize.define('VideoData', {
    videoTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    videoUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    videoStartDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    videoLocation: {
        type: DataTypes.STRING
    }
  }, {
  });

  (async () => {
    await sequelize.sync({});
  })();



module.exports = {VideoData}

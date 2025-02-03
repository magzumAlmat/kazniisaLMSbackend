module.exports = (sequelize) => {
    const Progress = sequelize.define('Progress', {
      progress_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: Sequelize.STRING(50),
        defaultValue: 'not_started',
      },
      completed_at: {
        type: Sequelize.DATE,
      },
    }, {
      tableName: 'progress',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    return Progress;
  };
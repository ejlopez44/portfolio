module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deployed_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tech: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    });

    // // need to define relation to user model
    // Project.associate = function (models) {
    //     // We're saying that a Client should belong to a User
    //     // A Project can't be created without a User due to the foreign key constraint (have to define UserId)
    //     Project.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false,
    //             defaultValue: 1
    //         }
    //     });
    // };

    return Project;
};
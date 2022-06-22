import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User.js';

const sequelize = new Sequelize({
    database: 'some_db',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: '../db.sqlite',
    models: [User],
});

(async () => {
    await sequelize.sync({ force: true });
    await User.create({
        id: 1,
        username: 'test',
        password: 'test',
    });

    const data = await User.findOne({ where: { username: 'test' } });
    console.info(data);
})();

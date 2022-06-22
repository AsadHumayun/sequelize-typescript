import { Column, Model, NotNull, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Unique
    @PrimaryKey
    @Column
    declare id: string;

    @Column
    declare username: string;

    @Column
    declare password: string;
}

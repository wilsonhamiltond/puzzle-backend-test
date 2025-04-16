import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

export interface WatchListAttributes {
    id: string;
    symbol: string;
    companyName: string;
    notes: string;
};

/*
  We have to declare the WatchListCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface WatchListCreationAttributes
    extends Optional<WatchListAttributes, 'id'> { }

interface WatchListInstance
    extends Model<WatchListAttributes, WatchListCreationAttributes>,
    WatchListAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const WatchList = sequelize.define<WatchListInstance>(
    'WatchList',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        symbol: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        notes: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        companyName: {
            allowNull: false,
            type: DataTypes.STRING,
        }
    }
);

export default WatchList;

import { handler } from '../../../src/functions/watchlist/create';
import createMockEvent from '../../__mocks__/createMockEvent';
import watchlists from '../../__mocks__/watchlist';
const SequelizeMock = require("sequelize-mock");
const sequelizeMockInstance = new SequelizeMock();

describe('src/functions/watchlist/create', () => {
    let Watchlist: any;

    beforeEach(() => {
        jest.mock('../../../src/db/models', () => sequelizeMockInstance);
        Watchlist = sequelizeMockInstance.define('Watchlist', watchlists[0]);
    });

    it('should return a 200 status code and the correct response', async () => {
        Watchlist.findOne = jest.fn().mockResolvedValue(Watchlist.build(watchlists[0]));
        const event = createMockEvent('POST', `/watchlists`, {
            symbol: "sad",
            notes: "helllo",
            companyName: "test",
        });

        // Invoke the Lambda function directly
        const response = await handler(event as any);
        const data = JSON.parse(response as any);

        // Assertions
        expect(data.statusCode).toBe(200);
    });
    it('should return a 400 status code on invalid params', async () => {
        Watchlist.findOne = jest.fn().mockResolvedValue(null);
        const event = createMockEvent('POST', `/watchlists`, {}, { });

        // Invoke the Lambda function directly
        const response = await handler(event as any);
        const data = JSON.parse(response as any);
        // Assertions
        expect(data.statusCode).toBe(400);
    });
});
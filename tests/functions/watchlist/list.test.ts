import { handler } from '../../../src/functions/watchlist/list';
import createMockEvent from '../../__mocks__/createMockEvent';
import watchlists from '../../__mocks__/watchlist';
const SequelizeMock = require("sequelize-mock");
const sequelizeMockInstance = new SequelizeMock();

describe('src/functions/watchlist/list', () => {
    let Watchlist: any;

    beforeEach(() => {
        jest.mock('../../../src/db/models', () => sequelizeMockInstance);
        Watchlist = sequelizeMockInstance.define('Watchlist', watchlists[0]);
    });

    it('should return a 200 status code and the correct response', async () => {
        Watchlist.findAll = jest.fn().mockResolvedValue(watchlists);
        const event = createMockEvent('GET', `/watchlists`);

        // Invoke the Lambda function directly
        const response = await handler(event as any);
        const data = JSON.parse(response as any);

        // Assertions
        expect(data.statusCode).toBe(200);
        expect(data.body.data.length).toBe(1);
    });
});
import { handler } from '../../../src/functions/watchlist/delete';
import createMockEvent from '../../__mocks__/createMockEvent';
import watchlists from '../../__mocks__/watchlist';
const SequelizeMock = require("sequelize-mock");
const sequelizeMockInstance = new SequelizeMock();

describe('src/functions/watchlist/delete', () => {
    let Watchlist: any;

    beforeEach(() => {
        jest.mock('../../../src/db/models', () => sequelizeMockInstance);
        Watchlist = sequelizeMockInstance.define('Watchlist', watchlists[0]);
    });

    it('should return a 200 status code and the correct response', async () => {
        Watchlist.findOne = jest.fn().mockResolvedValue(Watchlist.build(watchlists[0]));
        const id = '55208ecd-3a32-460d-8d90-25d868d89e8c'
        const event = createMockEvent('GET', `/watchlists/${id}`, null, { id });

        // Invoke the Lambda function directly
        const response = await handler(event as any);
        const data = JSON.parse(response as any);

        // Assertions
        expect(data.statusCode).toBe(200);
        expect(data.body.data.message).toBe('Watchlist delete success.');
    });
    it('should return a 400 status code on invalid params', async () => {
        Watchlist.findOne = jest.fn().mockResolvedValue(null);
        const event = createMockEvent('DELETE', `/watchlists`, null, { });

        // Invoke the Lambda function directly
        const response = await handler(event as any);
        const data = JSON.parse(response as any);

        // Assertions
        expect(data.statusCode).toBe(400);
    });
});
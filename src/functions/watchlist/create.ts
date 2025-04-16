import { v4 } from 'uuid';
import WatchList from "../../db/models/watchlist";

import Ajv from 'ajv';
const ajv = new Ajv({ allErrors: true });

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import response from '../../utils/response';
import watchlistSchema from '../../schemas/watchlist.schema';

export const handler = async (
    event: APIGatewayProxyEvent,
    //context: Context
): Promise<APIGatewayProxyResult> => {
    const watchlist: any = JSON.parse(event.body as any);
    
    const validate: any = ajv.compile(watchlistSchema);
    const result = validate(watchlist);

    if (!result) {
        const errors = validate.errors.map((error: any) => (error.message));
        return response(false, 400, errors);
    }

    await WatchList.create({
        id: v4(),
        ...watchlist
    });

    return response(true, 200, 'WatchList saved success');
};

import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import Watchlist from "../../db/models/watchlist";
import Ajv from 'ajv';
import watchlistSchema from "../../schemas/watchlist.schema";
import response from "../../utils/response";

const ajv = new Ajv({ allErrors: true });

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const { id } = event?.pathParameters || {} as any;
    if (!id) {
        return response(false, 400, 'Id is required');
    }
    const watchlist: any = JSON.parse(event.body as any);

    const validate: any = ajv.compile(watchlistSchema);
    const result = validate(watchlist)

    if (!result) {
        const errors = validate.errors.map((error: any) => (error.message));
        return response(false, 400, errors);
    }

    const currentWatchlist = await Watchlist.findOne({
        where: {
            id
        }
    });

    if (!currentWatchlist) {
        return response(false, 404, 'Watchlist not found.');
    }
    await currentWatchlist?.update(watchlist);

    return response(true, 200, currentWatchlist);
};

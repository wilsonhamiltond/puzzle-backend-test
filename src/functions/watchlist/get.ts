import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import Watchlist from "../../db/models/watchlist";
import response from "../../utils/response";

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const { id } = event?.pathParameters || {} as any;

    if (!id) {
        return response(false, 400, 'Id is required.');
    }

    const watchlist = await Watchlist.findOne({
        where: {
            id
        }
    });

    if (!watchlist) {
        return response(false, 404, 'Watchlist not found.');
    }

    return response(true, 200, watchlist);
};

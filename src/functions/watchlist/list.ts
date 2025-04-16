import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import WatchList from "../../db/models/watchlist";
import response from "../../utils/response";


export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const watchLists = await WatchList.findAll();

    return response(true, 200, watchLists);
};

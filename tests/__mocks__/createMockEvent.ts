const createMockEvent = (method: string, path: string, body?: any, pathParameters?: any) => {
    return {
        httpMethod: method,
        path,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'Content-Type': 'application/json',
        },
        pathParameters,
    };
};

export default createMockEvent;

const response = (status: boolean, code: number, object: any = undefined): any => {
    const message: object | undefined = typeof object === 'string' ? { message: object } : undefined;
    const errors: object | undefined = typeof object === 'string' ? [object] : undefined;
    const body = {
        status,
        ...(status && { data: message || object }),
        ...(!status && { errors: errors || object }),
    };

    return JSON.stringify({
        statusCode: code,
        body: body
    })
}

export default response;
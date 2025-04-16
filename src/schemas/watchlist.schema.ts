// Watch List Schema
const watchlistSchema = {
    type: 'object',
    properties: {
        symbol: { type: 'string' },
        companyName: { type: 'string' },
        notes: { type: 'string' },
    },
    required: ['symbol', 'companyName', 'notes'],
};

export default watchlistSchema;

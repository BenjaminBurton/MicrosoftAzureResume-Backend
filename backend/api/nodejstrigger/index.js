const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const client = new CosmosClient({ endpoint, key });

    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
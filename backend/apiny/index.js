const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const name = req.query.name || (req.body && req.body.count);
  const responseMessage = count
    ? "Hello, " + count + ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  if (name) {
    context.bindings.outputDocument = JSON.stringify({
      // create a random ID
      id: new Date().toISOString() + Math.random().toString().substring(2, 10),
      count: 0,
    });
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};

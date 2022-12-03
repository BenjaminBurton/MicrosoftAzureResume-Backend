const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const client = new CosmosClient({ endpoint, key });

  const { databases } = await client.databases.createIfNotExists({
    id: "azdatbases",
  });
  const { container } = await databases.createIfNotExists({ id: "" });

  const { resources } = await container.items
    .query("SELECT * from c")
    .fetchAll();

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
// tbc
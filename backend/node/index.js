// Get environment variable from .env
import * as dotenv from "dotenv";
dotenv.config();

const { CosmosClient } = require("@azure/cosmos");

// Authenticate to Azure Cosmos DB
const cosmosClient = new CosmosClient({ endpoint, key });

async function main() {
  // Create database if it doesn't exist
  const { database } = await cosmosClient.databases.createIfNotExists({
    id: database,
  });
  console.log(`${database.id} database ready`);

  // Create Container if it doesn't exist
  const { container } = await database.containers.createIfNotExists({
    id: "Test Database ",
  });
  console.log(`${container.id} container ready`);

  // Data items
  const cities = [
    { id: "1", name: "England", city: "London", isCapitol: true },
  ];
  for (const city of cities) {
    container.items.create(city);
  }
  const { resources } = await container.items
    .query({
      query: "SELECT * from c WHERE c.isCapitol = @isCapitol",
      parameters: [{ name: "@isCapitol", value: true }],
    })
    .fetchAll();
  for (const city of resources) {
    console.log(`${city.name}, ${city.state} is a capitol`);
  }
}
main().catch((error) => {
  console.log(error);
});


import { CosmosClient } from "@azure/cosmos";

// Provide required connection from environment variables
const key = process.env.COSMOS_KEY;
// Endpoint format: https://YOUR-RESOURCE-NAME.documents.azure.com:443
const endpoint = process.env.COSMOS_ENDPOINT;

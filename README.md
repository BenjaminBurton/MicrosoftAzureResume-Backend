# MicrosoftAzureResume(Backend)
My Personal Resume Built on Azure from scratch for (Backend) as part of the Cloud Resume Challenge by @Forrest Brazeal

# Microsoft Azure Resume

![Resume](https://img.shields.io/badge/Resume-UnderConstruction-orange) ![Visits](https://img.shields.io/badge/Visits-Currently%20UK-brightgreen) ![Azure Piplines](https://img.shields.io/badge/Azure%20Pipelines-UnderConstruction-orange)

:wave: :wave: :wave: :wave: :wave:

[Resume Coming Soon](https://www.lavellburton.net/) :star:

My Personal Resume Built on Azure from scratch for the (Backend) to the Cloud Resume Challenge by @Forrest Brazeal

## Intro for project

Steps Involved: 

- [x] Database: Retrieve and update count with Azure CosmosDB (serverless)
- [x] API: communicates with database | Azure Functions w/ HTTP trigger 
- [x] Python: Explore Python with Azure Functions
- [x] Test: Write test for Python Code 
- [x] IAC: Define Infrestructure as Code in Azure Resource Manager ARM (Consumption Plan)
- [x] Source Control: Use GitHub Actions Workflows
- [x] CI/CD (Backend): GitHub Actions Workflows Backend
- [x] CI/CD (Frontend): GitHub Actions Workflows Frontend
- [x] Blog Post: Hashnode


[My version of the code found Below](https://github.com/BenjaminBurton/MicrosoftAzureResume)
```js
https://github.com/BenjaminBurton/MicrosoftAzureResume-Backend-

```
## Database
- ✅ Created a database with cosmosDB.  
- ✅ Did a quick launch and added the database name and container.
- ✅ Items in database setup successful
- ✅ If you have an issue with being able to develop in the portal go to your function and select deployment center and disable all neccesary connections, also check your GitHub and disconnect your apps if you want to develop in portal
- ✅ Using VsCode to install dependencies an scripts

## API
- ✅ HTTP trigger created in azure function via VSCode w/ .Net
- ✅ To access the Tables API Inside of CosmosDB selected create DB and select Table API
- ✅ added reference to access the Tables storage service through the code " using Microsoft.Azure.Cosmos.Table ";
- ✅ A connection string for AuthN can be retrieved from the portal.
- ✅ To store and retrieve the tables through a key we need URL for the Value of view count.
- ✅ The code connects and accesses thr Tables through the API package created and installed with CosmosDB

## Python
- You will need to write a bit of code in the Azure Function; you could use more Javascript, but it would be better for our purposes to explore Python – a common language used in back-end programs and scripts – and its Azure SDK. Here is a good, free Python tutorial.

## Test 
- You should also include some tests for your Python code. Here are some resources on writing good Python tests.

## Infrastructure As Code (IaC)
- You should not be configuring your API resources – the Azure Function, the CosmosDB – manually, by clicking around in the Azure console. Instead, define them in an Azure Resource Manager (ARM) template on a Consumption plan. This is called “infrastructure as code” or IaC. It saves you time in the long run.

## Source Control
- You do not want to be updating either your back-end API or your front-end website by making calls from your laptop, though. You want them to update automatically whenever you make a change to the code. (This is called continuous integration and deployment, or CI/CD.) Create a GitHub repository for your backend code.

## CI/CD Backend
- Set up GitHub Actions such that when you push an update to your ARM template or Python code, your Python tests get run. If the tests pass, the ARM application should get packaged and deployed to Azure.

## CI/CD Frontend
- Create a second GitHub repository for your website code. Create GitHub Actions such that when you push new website code, the Azure Storage blob automatically gets updated. (You may need to purge your Azure CDN endpoint in the code as well.) Important note: DO NOT commit Azure credentials to source control! Bad hats will find them and use them against you!

## Blog Post
- Write about experience to Blog site HashNode

## Issues Encountered
- ❌ Actively Finding resolution to Issue
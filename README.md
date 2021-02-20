# Simple Demo of Mocking and Testing DynamoDB and S3 with Amplify

### Posting and Retrieving Template Metadata to DynamoDB
- Amplify API.graphql is used in place of the Apollo plug-in QsrSoft uses.
- When the mock DynamoDB table is used, it is stored in a binary file in the `amplify/mock-data/dynamodb` folder
- This simple app is easily run with AWS DynamoDB table as well.
### Posting and Retrieving Template Content to S3
- Amplify Storage Put and Get are used.
- Mocked S3 objects are stored in the `amplify/mock-data/S3/simpledemocontentbucket/public` folder.
- To use this with AWS S3, authorization still needs to be implemenented.
### Testing with Cypress
- Cypress integration testing is used here, simulating user interaction and reading results from the browser page.

### In this app, the template metadata and JSON content are handled separately. In a polished app, these functions would be joined.

## Running this demo
- Clone this repository
- Run `npm install`
- In one terminal window, run `amplify mock`
- In a second terminal window, run `npm run serve`
- In a third terminal window, run `npx cypress open`

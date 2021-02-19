/* Amplify Params - DO NOT EDIT
	API_MYAPI_GRAPHQLAPIIDOUTPUT
	API_MYAPI_TEMPLATETABLE_ARN
	API_MYAPI_TEMPLATETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

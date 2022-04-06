const webpush = require("web-push");
const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB();

webpush.setVapidDetails(
    process.env['PushSubject'],
    process.env['PushPublicKey'],
    process.env['PushPrivateKey']
);

const getSubscriptions = async (topic) => {
    var params = {
        TableName: process.env['SubscriptionsTable'],
        FilterExpression: "topic = :topic",
        ExpressionAttributeValues: {
            ":topic": { S: topic },
        },
        // Set the projection expression, which are the attributes that you want.
        ProjectionExpression: "subscription, id, topic",
    };

    return new Promise((ok, err) => {
        dynamodb.scan(params, function (e, data) {
            if (e) err(e);
            else ok(data);
        })
    });
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const { Items } = await getSubscriptions("Test");

    const promises = [];
    Items.forEach(d => {

        const subscription = JSON.parse(d.subscription.S);
        let result = webpush.sendNotification(subscription, JSON.stringify({ title: "Sample", text: "Hello World" }));
        promises.push(result);

    });
    try {
        await Promise.all(promises);
    } catch (e) {
        console.error(e);
    }

    return {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  }, 
        body: JSON.stringify('Hello from AWS Lambda!'),
    };
};

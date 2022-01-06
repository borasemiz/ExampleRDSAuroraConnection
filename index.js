const { RDSDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-rds-data");

const client = new RDSDataClient({
  region: 'eu-central-1',
  credentials: {
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
  }
});

const command = new ExecuteStatementCommand({
  sql: 'select * from example_table',
  database: 'ExampleDatabase',
  resourceArn: '<db_cluster_arn>',
  secretArn: '<db_credentials_arn>'
});

client.send(command).then(data => console.log(JSON.stringify(data, null, 2)));

import { Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';


export class CdkSampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new dynamodb.Table(this, 'MyTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      // It's good practice to set a removal policy for sample apps
      removalPolicy: RemovalPolicy.DESTROY, // DESTROY will delete the table when the stack is deleted
      // tableName: 'MySampleTable' // Optional: specify a table name
    });
  }
}

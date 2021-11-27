import * as cdk from '@aws-cdk/core';
import * as ecs from '@aws-cdk/aws-ecs';
import {LogGroup} from "@aws-cdk/aws-logs";

export class CdkEcsBugStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ecs.Cluster(this, 'Cluster', {
      containerInsights: true,
      executeCommandConfiguration: {
        logging: ecs.ExecuteCommandLogging.OVERRIDE,
        logConfiguration: {
          cloudWatchLogGroup: new LogGroup(this, 'LogGroup'),
        }
      },
    });
  }
}

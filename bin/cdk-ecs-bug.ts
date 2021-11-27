#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkEcsBugStack } from '../lib/cdk-ecs-bug-stack';

const app = new cdk.App();
new CdkEcsBugStack(app, 'CdkEcsBugStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});

#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { StaticSite } from './src/cdk/lib/cdk-stack.js';

class MyStaticStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string) {
    super(parent, name);

    new StaticSite(this, name);
  }
}

const app = new cdk.App();
new MyStaticStack(app, 'MyStaticSite');

app.synth();
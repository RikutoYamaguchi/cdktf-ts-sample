import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { createVpcAndSubnet } from '@src/helpers';
import { AwsProvider } from '@gen/providers/aws';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, 'aws', {
      region: 'ap-northeast-1',
    });

    createVpcAndSubnet(this, '10.0.0.0/16', 'production');
    createVpcAndSubnet(this, '10.1.0.0/16', 'staging');
  }
}

const app = new App();
new MyStack(app, 'cdktf-ts-sample');
app.synth();

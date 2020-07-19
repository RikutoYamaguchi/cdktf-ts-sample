import { Construct } from 'constructs';
import { Subnet, Vpc } from '@gen/providers/aws';
import { Token } from 'cdktf';

export function subnetNetwork(vpcCidr: string, count = 0): string {
  const baseNetwork = vpcCidr.split('/')[0];
  return baseNetwork
    .split('.')
    .map((v, i) => {
      if (i === 2) {
        return +v + count;
      }
      return v;
    })
    .join('.');
}

export function createVpcAndSubnet(scope: Construct, vpcCidr: string, baseName: string): [Vpc, Subnet] {
  const vpc = new Vpc(scope, `${baseName}-vpc`, {
    cidrBlock: vpcCidr,
  });

  const sb = 24;

  const subnet = new Subnet(scope, `${baseName}-subnet`, {
    vpcId: Token.asString(vpc.id),
    cidrBlock: subnetNetwork(vpcCidr) + '/' + sb,
  });

  return [vpc, subnet];
}

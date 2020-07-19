import { subnetNetwork } from './createVpcAndSubnet';

test('subnetNetwork test', () => {
  expect(subnetNetwork('10.0.0.0/16', 0)).toEqual('10.0.0.0');
  expect(subnetNetwork('10.0.0.0/16', 1)).toEqual('10.0.1.0');
  expect(subnetNetwork('10.0.0.0/16', 2)).toEqual('10.0.2.0');
});

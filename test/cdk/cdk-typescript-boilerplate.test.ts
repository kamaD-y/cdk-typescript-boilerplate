import * as cdk from 'aws-cdk-lib';
import { Aspects } from 'aws-cdk-lib';
import { Annotations, Match, Template } from 'aws-cdk-lib/assertions';
import { AwsSolutionsChecks } from 'cdk-nag';
import { CdkTypescriptBoilerplateStack } from '../../lib/cdk-typescript-boilerplate-stack';

test('snapshot test', () => {
  const app = new cdk.App();
  const stack = new CdkTypescriptBoilerplateStack(app, 'MyTestStack');

  const template = Template.fromStack(stack).toJSON();
  expect(template).toMatchSnapshot();
});

describe('cdk-nag AwsSolutionsChecks', () => {
  const app = new cdk.App();
  const stack = new CdkTypescriptBoilerplateStack(app, 'MyTestStack', {});
  Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));

  test('CdkTypescriptBoilerplateStack no unsuppressed warnings', () => {
    const warnings = Annotations.fromStack(stack).findWarning('*', Match.stringLikeRegexp('AwsSolutions-.*'));
    expect(warnings).toHaveLength(0);
  });

  test('CdkTypescriptBoilerplateStack no unsuppressed errors', () => {
    const errors = Annotations.fromStack(stack).findError('*', Match.stringLikeRegexp('AwsSolutions-.*'));
    expect(errors).toHaveLength(0);
  });
});

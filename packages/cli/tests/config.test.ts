import * as config from '../src/config';
import * as utils from '@esmbly/utils';
import inquirer from 'inquirer';

jest.mock('inquirer');
jest.mock('@esmbly/utils');

describe('promptForConfig', () => {
  it('asks the correct questions', async () => {
    inquirer.prompt = jest.fn();
    (inquirer.prompt as jest.Mock).mockReturnValue({});
    (utils as any).getTransformers = jest.fn();
    (utils.getTransformers as jest.Mock).mockResolvedValue(['flow', 'wasm']);
    (utils as any).getOutputForTransformers = jest.fn();
    (utils.getOutputForTransformers as jest.Mock).mockResolvedValue([
      'TypeScript',
      'WebAssembly',
    ]);
    await config.promptForConfig();
    expect((inquirer.prompt as jest.Mock).mock.calls).toMatchSnapshot();
    expect(utils.getTransformers as jest.Mock).toHaveBeenCalledTimes(1);
    expect(utils.getOutputForTransformers as jest.Mock).toHaveBeenCalledTimes(
      1,
    );
  });
});

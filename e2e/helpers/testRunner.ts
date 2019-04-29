import util from 'util';
import { exec } from 'child_process';

export async function testRunner(cwd: string): Promise<void> {
  const { stderr } = await util.promisify(exec)(`yarn run esmbly run`, { cwd });
  if (stderr && stderr.trim().length > 0) {
    throw new Error(stderr);
  }
}
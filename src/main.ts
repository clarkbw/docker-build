import {setFailed} from '@actions/core';
import {build} from './build';

async function run(): Promise<void> {
  try {
    await build();
  } catch (e) {
    setFailed(e.message);
    throw e;
  }

  run();
}

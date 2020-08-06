import {getInput} from '@actions/core';
import {exec} from '@actions/exec';

// https://docs.docker.com/engine/reference/commandline/build/
export async function build(): Promise<number> {
  const path: string = getInput('path', {required: true});
  const tag: string = getInput('tag');
  const dockerfile: string = getInput('dockerfile');
  const buildArgs: string = getInput('build-args');
  const labels: string = getInput('labels');
  const cacheFrom: string = getInput('cache-from');
  const target: string = getInput('target');

  const args: string = getInput('options');

  const options = [
    'build',
    tag,
    dockerfile,
    buildArgs,
    labels,
    cacheFrom,
    target,
    args,
    path
  ];

  console.log('docker', options.join(' '));

  try {
    return await exec('docker', options);
  } catch (e) {
    console.error(`Error with build`, e);
    throw e;
  }
  return -100;
}

import * as core from '@actions/core'

async function run() {
  const llvm = core.getInput("llvm");
  core.info(`Downloading cxx-common with llvm-${llvm}`);
}

// Our main method: call the run() function and report any errors
run()
  .catch(error => core.setFailed("Workflow failed! " + error.message));


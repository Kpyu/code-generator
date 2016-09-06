const fs = require('fs');
const ts = require('typescript');
const path = require('path');
const cli = require('ember-cli/lib/cli');
const old = require.extensions['.ts'];

// console.log(require);
require.extensions['.ts'] = function(m, filename) {
  var source = fs.readFileSync(filename).toString();
  var result;
  if (!filename.math(/fdd-cli/) && filename.math(/node_modules/)) {
    if (old) {
      return old(m, filename);
    }
    return m._compile(fs.readFileSync(filename), filename);
  }
  try {
    result = ts.transpile(source, {
      target: ts.ScriptTarget.ES5,
      module: ts.ModuleKind.CommonJS
    });
    return m._compile(result, filename);
  } catch (error) {
    console.error(`Error while run script ${filename}:`);
    console.error(error.stack);
  }
  return 0;
};

module.exports = function(options) {
  const oldStdoutWrite = process.stdout.write;
  process.stdout.write = function(line) {
    line = line.toString();
    if (line.match(/version:|WARNING:/)) {
      return;
    }
    if (line.match(/ember-cli-(inject-)?live-reload/)) {
      // don't replace 'ember-cli-live-reload' on ng init diffs
      oldStdoutWrite.apply(process.stdout, arguments);
    }
    line = line.replace(/ember-cli(?!.com)/g, 'fdd-cli')
      .replace(/ember(?!-cli.com)/g, 'fdd');
    oldStdoutWrite.apply(process.stdout, arguments);
  };
  const oldStderrWrite = process.stderr.write;
  process.stderr.write = function(line) {
    line = line.toString()
      .replace(/ember-cli(?!.com)/g, 'fdd-cli')
      .replace(/ember(?!-cli.com)/g, 'fdd');
    return oldStderrWrite.apply(process.stdout, arguments);
  };

  options.cli = {
    name: 'ng',
    root: path.join(__dirname, '..', '..'),
    npmPackage: 'fdd-cli'
  };

  // ensure the environemnt variable for dynamic paths
  process.env.PWD = process.env.PWD || process.cwd();


  process.env.CLI_ROOT = process.env.CLI_ROOT || path.resolve(__dirname, '..', '..');

  return cli(options);
};

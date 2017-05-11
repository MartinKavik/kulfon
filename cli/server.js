// Copyright 2016 Zaiste & contributors. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const Huncwot = require('huncwot');
const chokidar = require('chokidar');
const { compile, transform, compileAll } = require('./compiler');
const path = require('path');
const colors = require('colors');

const debug = require('debug')('server');

function recompile(file) {
  let fileSegments = file.split(path.sep);
  const prefix = fileSegments.shift();
  file = path.join(...fileSegments);

  debug(`file to recompile: ${file}`);
  if (prefix.match(/layouts|partials|data/)) {
    transform('pages')();
  } else {
    compile(prefix)(file);
  }
}

async function serve({ port, dir }) {
  await compileAll({ dir })

  const watcher = chokidar.watch(dir, {
    ignored: /[\/\\]\./,
    persistent: true,
    cwd: 'website'
  });

  watcher
    .on('change', recompile)

  const app = new Huncwot({ staticDir: './public' });

  app.on('error', err => {
    console.log('Error: '.red + err.message);
  });

  app.listen(port);
  
  console.log(`---\nServer running at http://localhost:${port}`)
}

module.exports = {
  builder: _ => _
    .option('port', { alias: 'p', default: 3000 })
    .default('dir', '.'),
  handler: serve
};

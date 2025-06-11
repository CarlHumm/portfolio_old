import { rmSync, mkdirSync, existsSync, cpSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import fse from 'fs-extra'; 
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import ora from 'ora';
import webpack from 'webpack';

import config from '../config/webpack.config.prod.js';
import paths from '../config/paths.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  console.error('Unhandled rejection:', err);
  throw err;
});

const spinner = ora('Starting production build...').start();

if (!existsSync(paths.appHtml) || !existsSync(paths.appIndexJs)) {
  console.error(chalk.red('Required files are missing.'));
  process.exit(1);
}

function copyPhpFiles() {
  const source = path.resolve(__dirname, '../src/php');
  const destination = path.resolve(__dirname, '../api');

if (existsSync(source)) {
    fse.copySync(source, destination, { overwrite: true });
    console.log('PHP files copied to /api');
  } else {
    console.warn('No PHP files found to copy.');
  }
}

function cleanBuildFolder() {
  rmSync(paths.appBuild, { recursive: true, force: true });
  mkdirSync(paths.appBuild, { recursive: true });
}

async function build() {
  spinner.text = 'Creating optimized production build...';
  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run(async (err, stats) => {
      spinner.stop();

      if (err) {
        console.error(chalk.red('Failed to compile.\n'));
        console.error(err.stack || err);
        if (err.details) console.error(err.details);
        return reject(err);
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(chalk.red('Build failed with errors:\n'));
        info.errors.forEach(err => {
          if (typeof err === 'object') {
            console.error(JSON.stringify(err, null, 2));
          } else {
            console.error(err);
          }
        });
        return reject(new Error('Build failed.'));
      }
      if (stats.hasWarnings()) {
        console.warn(chalk.yellow('Compiled with warnings:\n'));
        console.warn(info.warnings.join('\n\n'));
      } else {
        console.log(chalk.green('Compiled successfully!\n'));
      }

      if (process.argv.includes('--stats')) {
        const statsPath = path.join(paths.appBuild, 'bundle-stats.json');
        await writeFile(statsPath, JSON.stringify(info, null, 2));
        console.log(chalk.blue(`Stats written to ${statsPath}`));
      }
      printHostingInstructions(config.output.publicPath);

      resolve();
    });
  });
}
function printHostingInstructions(publicPath) {
  console.log('\nYou can now deploy the build folder to any static hosting service.');
  console.log(`\nPublic path: ${chalk.cyan(publicPath)}`);
  console.log(`Build folder: ${chalk.cyan(path.relative(process.cwd(), paths.appBuild))}\n`);
}

function copyPublicExtras() {
  const sourceMedia = path.resolve(__dirname, '../public/media');
  const destMedia = path.resolve(__dirname, '../build/media');

  if (existsSync(sourceMedia)) {
    cpSync(sourceMedia, destMedia, { recursive: true });
  }
}

// Execute build
(async () => {
  try {
    cleanBuildFolder();       
    await build();            
    copyPublicExtras();       
    copyPhpFiles();           
  } catch (err) {
    spinner.stop();
    console.error(chalk.red('Build failed.\n'));
    console.error(err);
    process.exit(1);
  }
})();

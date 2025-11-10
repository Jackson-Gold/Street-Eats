const { existsSync } = require('fs');
const { join } = require('path');
const { execSync } = require('child_process');

const expoPackage = join(__dirname, '..', 'node_modules', 'expo', 'package.json');

if (!existsSync(expoPackage)) {
  console.log('\n[street-eats] Installing project dependencies (expo not found)...');
  try {
    execSync('npm install', { stdio: 'inherit' });
  } catch (error) {
    console.error('\n[street-eats] Failed to install dependencies automatically.');
    console.error('Please run "npm install" manually and re-run the start command.');
    process.exit(1);
  }
}

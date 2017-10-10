const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const IPAddress = '192.168.99.10';

/**
 * Use Yarn if available, it's much faster than the npm client.
 * Return the version of yarn installed on the system, null if yarn is not available.
 */
function getYarnVersionIfAvailable() {
  let yarnVersion;
  try {
    // execSync returns a Buffer -> convert to string
    yarnVersion = (execSync('yarn --version', {
      stdio: [0, 'pipe', 'ignore'],
    }).toString() || '').trim();
  } catch (error) {
    return null;
  }
  return yarnVersion;
}

function createScripts() {
  const packageJSONPath = path.resolve('package.json');
  const packageJSON = JSON.parse(fs.readFileSync(packageJSONPath));
  if (!packageJSON.scripts) {
    packageJSON.scripts = {};
  }
  packageJSON.scripts.lint = "eslint '{src,__test__}/**/*.js'";
  packageJSON.scripts.format = "prettier-eslint --write '{src,__test__}/**/*.js'";
  fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2), 'utf8');
}

function installDevDependencies() {
  console.log('Adding dev dependencies for the project...');

  const devDependenciesJsonPath = path.resolve('devDependencies.json');
  const devDependencies = JSON.parse(fs.readFileSync(devDependenciesJsonPath));

  for (const depName in devDependencies) {
    const depVersion = devDependencies[depName];
    const depToInstall = `${depName}@${depVersion}`;
    console.log(`Adding ${depToInstall}...`);

    if (getYarnVersionIfAvailable()) {
      execSync(`yarn add ${depToInstall} --dev`, { stdio: 'inherit' });
    } else {
      execSync(`npm install ${depToInstall} --save-dev`);
    }
  }
}

function removeUnnecessaryFiles() {
  const unwantedFiles = [
    './devDependencies.json',
    './postInstall.js',
    './App.js'
  ];
  unwantedFiles.map((file) => {
    execSync(`rm -rf ${file}`);
  });
}

function replaceInFile(file, search, target) {
  const fs = require('fs');
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    const result = data.replace(search, target);
    return fs.writeFile(file, result, 'utf8', (error) => {
      if (error) {
        return console.log(error);
      }
    });
  });
}

function addNetworkPermission() {
  replaceInFile('./android/app/src/main/AndroidManifest.xml', /<uses-permission android:name="android\.permission\.SYSTEM_ALERT_WINDOW"(?:[\s]?)\/>/g, `<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />`);
}

function changeReactNativeHost() {
  replaceInFile('./node_modules/react-native/Libraries/Core/Devtools/setupDevtools.js', /localhost/g, IPAddress)
}

installDevDependencies();
createScripts();
removeUnnecessaryFiles();
addNetworkPermission();
changeReactNativeHost();

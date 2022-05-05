const os = require('os')
const { exec } = require('child_process')

const platform = os.platform()
if (platform === 'Win32') {
  exec('husky install')
} else {
  exec('husky install && chmod ug+x .husky/*')
}

const { spawn } = require('child_process')

module.exports = {
  execCommand,
  proxyCommand,
}

async function proxyCommand(cmd) {
  const [, , ...args] = process.argv

  const cmdWithArgs = [cmd, ...args].join(' ')

  return execCommand(cmdWithArgs)
}

async function execCommand(cmd, exitOnError = true) {
  return new Promise((resolve, reject) => {
    console.log(cmd)

    const cp = spawn(cmd, { shell: true, stdio: 'inherit' })
    // cp.stdout.on('data', data => console.log(data.toString()))
    // cp.stderr.on('data', data => console.log(data.toString()))
    cp.once('error', err => reject(err))
    cp.once('close', code => {
      // console.log('close: ' + code)
      if (code) {
        if (exitOnError) {
          process.exit(code)
        } else {
          reject(new Error(`${cmd} exitCode: ${code}`))
        }
      } else {
        resolve(code)
      }
    })
  })
}

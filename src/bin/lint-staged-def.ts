#!/usr/bin/env node

import { runScript } from '@naturalcycles/nodejs-lib/dist/script'
import * as fs from 'fs'
import { cfgDir } from '../cnst/paths.cnst'

runScript(async () => {
  // const cwd = process.cwd()
  const localConfig = `./lint-staged.config.js`
  const sharedConfig = `${cfgDir}/lint-staged.config.js`
  const config = fs.existsSync(localConfig) ? localConfig : sharedConfig

  // await execWithArgs(`lint-staged`, [`--config`, config])
  const lintStaged = require('lint-staged')
  const success = await lintStaged({
    configPath: config,
  })

  if (!success) process.exit(3)
})

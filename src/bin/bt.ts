#!/usr/bin/env node

import { runScript } from '@naturalcycles/nodejs-lib/dist/script'
import * as fs from 'fs-extra'
import { tscScriptsCommand } from '../cmd/tsc-scripts.command'
import { runJest } from '../util/jest.util'
import { tsc } from '../util/tsc.util'

runScript(async () => {
  await fs.emptyDir('./dist')
  await tsc()
  await tscScriptsCommand()
  await runJest()
})

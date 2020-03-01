#!/usr/bin/env node

import { buildProdCommand } from '../cmd/build-prod.command'

buildProdCommand().catch(err => {
  console.error(err)
  process.exit(1)
})
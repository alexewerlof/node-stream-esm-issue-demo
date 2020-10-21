import { promises as fsPromises } from 'fs' // no error thrown
import { promises as dnsPromises } from 'dns' // no error thrown
import { promises as streamPromises } from 'stream'
//       ^^^^^^^^
// SyntaxError: The requested module 'stream' does not provide an export named 'promises'
//     at ModuleJob._instantiate (internal/modules/esm/module_job.js:98:21)
//     at async ModuleJob.run (internal/modules/esm/module_job.js:143:5)
//     at async Loader.import (internal/modules/esm/loader.js:165:24)
//     at async Object.loadESM (internal/process/esm_loader.js:68:5)

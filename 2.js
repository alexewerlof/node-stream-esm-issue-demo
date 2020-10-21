import { promises } from 'stream'
//       ^^^^^^^^
// SyntaxError: The requested module 'stream' does not provide an export named 'promises'
//     at ModuleJob._instantiate (internal/modules/esm/module_job.js:92:21)
//     at async ModuleJob.run (internal/modules/esm/module_job.js:107:20)
//     at async Loader.import (internal/modules/esm/loader.js:179:24)

import { promises as fsPromises } from 'fs' // no error thrown
import { promises as dnsPromises } from 'dns' // no error thrown
import { promises } from 'stream/promises'

/*
(node:24148) ExperimentalWarning: The ESM module loader is experimental.
internal/modules/run_main.js:54
    internalBinding('errors').triggerUncaughtException(
                              ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'stream' imported from /path/to/node-stream-esm-issue-demo/3.js
    at packageResolve (internal/modules/esm/resolve.js:616:9)
    at moduleResolve (internal/modules/esm/resolve.js:655:14)
    at Loader.defaultResolve [as _resolve] (internal/modules/esm/resolve.js:748:11)
    at Loader.resolve (internal/modules/esm/loader.js:97:40)
    at Loader.getModuleJob (internal/modules/esm/loader.js:243:28)
    at ModuleWrap.<anonymous> (internal/modules/esm/module_job.js:42:40)
    at link (internal/modules/esm/module_job.js:41:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}
*/

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const colors = require("colors/safe");
const NodeHelpers = require("child-process-promise");
const apiSwaggerUrl = 'http://localhost:3018/api/docs/swagger.json';
const swaggerCodegenConfig = path.join(__dirname, 'swagger-codegen-config.json');
const swaggerFrontOutput = path.join(__dirname, '../..', 'ionic-bet', 'src', 'providers', 'api-client.generated');
if (!fs.existsSync(swaggerCodegenConfig)) {
    console.error(colors.red(`Impossible de générer le code client : le fichier de configuration ${swaggerCodegenConfig} n'existe pas !`));
    process.exit(1);
}
NodeHelpers.exec(`npx openapi-generator-cli generate -i "${apiSwaggerUrl}" -g typescript-angular -c "${swaggerCodegenConfig}" -o "${swaggerFrontOutput}" --type-mappings DateTime=Date`, {
    cwd: path.resolve(path.join(__dirname, '.'))
}).then(() => {
    console.log(colors.green(`Code client généré avec succès !`));
}).catch((err) => {
    console.error(colors.red(`Impossible de générer le code client : ${err}`));
});
//# sourceMappingURL=nswag-generate-client.js.map
import { danger, fail, warn, message, markdown } from "danger";

const serviceFiles = danger.git.fileMatch("src/services/**");
const serviceTestFiles = danger.git.fileMatch("src/__tests__/services/**");

const controllerFiles = danger.git.fileMatch("src/controllers/**");
const routeFiles = danger.git.fileMatch("src/routes/**");
const docs = danger.git.fileMatch("auth.apib");

const changelog = danger.git.fileMatch("CHANGELOG.md");

if(serviceFiles.edited && !serviceTestFiles.edited) {
    warn("Existem modificações em arquivos de serviço, mas não existem modificações em arquivos de teste. Isto é OK desde que o código esteja sendo refatorado.");
}

if((controllerFiles.edited || routeFiles.edited) && !docs.edited) {
    fail(":exclamation: Houveram mudanças em arquivos de controllers/rotas, mas a documentação não foi alterada!");
}

if(!changelog.edited) {
    warn("Não foram detectadas mudanças no changelog. Por favor, verifique as nossas regras sobre CHANGELOG [aqui](https://google.com).")
}

console.log(danger.github.pr);

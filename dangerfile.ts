import { danger, fail, warn, message, markdown } from "danger";

const serviceFiles = danger.git.fileMatch("src/services/**");
const serviceTestFiles = danger.git.fileMatch("src/__tests__/services/**");

if(serviceFiles.edited && !serviceTestFiles.edited) {
    warn("Existem modificações em arquivos de serviço, mas não existem modificações em arquivos de teste. Isto é OK desde que o código esteja sendo refatorado.");
}



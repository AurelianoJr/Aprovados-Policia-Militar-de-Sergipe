import { MenuBotao } from "./app/actions/MenuBotao.js";
import { TabMenu } from "./app/actions/TabMenu.js";
import { SimulaConvocacao } from "./app/actions/SimulaConvocacao.js";
import { ImportaLista } from "./app/actions/ImportaLista.js";
import { AprovadoController } from "./app/controller/AprovadoController.js";
import { MenuRange } from "./app/actions/MenuRange.js";
import { ValidacaoInput } from "./app/actions/ValidacaoInput.js";

new TabMenu();
new MenuBotao();
new MenuRange();
new ValidacaoInput();

const aprovadoController = new AprovadoController();
new ImportaLista(aprovadoController);
new SimulaConvocacao(aprovadoController).requisitarSimulacao();
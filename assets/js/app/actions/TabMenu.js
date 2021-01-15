export class TabMenu {

    constructor() {
        this._tabs = new Array(...document.getElementById("lista-tab").children);
        this._adicionar();
    }

    _adicionar() {
        this._tabs.forEach(tab => tab.addEventListener("click", ()=>{
            this._mudarTab(tab);
        }));
    }

    _mudarTab(selecionada) {
        this._tabs.forEach(tab => {
            if (tab == selecionada) {
                this._ativar(tab);
            } else {
                this._desativar(tab);
            }
        });
    }

    _ativar(tab) {
        const pane = document.getElementById(tab.getAttribute("aria-controls"));
       
        tab.ariaSelected = true;
        tab.tabIndex = 0;
        tab.classList.add("tab__label--active");
        pane.classList.add("tab--active");
    }

    _desativar(tab) {
        const pane = document.getElementById(tab.getAttribute("aria-controls"));
        
        tab.ariaSelected = false;
        tab.tabIndex = -1;
        tab.classList.remove("tab__label--active");
        pane.classList.remove("tab--active");
    }
}



// let tabSegundaTurma = document.getElementById("segunda-turma");
// let tabTerceiraTurma = document.getElementById("terceira-turma")

// let paneSegundaTurma = document.getElementById("tab-segunda-turma");
// let paneTerceiraTurma = document.getElementById("tab-terceira-turma");

// tabSegundaTurma.addEventListener("click", () => {
//     tabSegundaTurma.tabIndex = 0;
//     tabSegundaTurma.ariaSelected = true;
//     paneSegundaTurma.style.display = "block";

//     tabTerceiraTurma.tabIndex = -1;
//     tabTerceiraTurma.ariaSelected = false;
//     paneTerceiraTurma.style.display = "none";

//     tabSegundaTurma.classList.add("tab__label--active");
//     tabTerceiraTurma.classList.remove("tab__label--active");
// });

// tabTerceiraTurma.addEventListener("click", () => {
//     tabSegundaTurma.tabIndex = -1;
//     tabSegundaTurma.ariaSelected = false;
//     paneSegundaTurma.style.display = "none";

//     tabTerceiraTurma.tabIndex = 0;
//     tabTerceiraTurma.ariaSelected = true;
//     paneTerceiraTurma.style.display = "block";

//     tabSegundaTurma.classList.remove("tab__label--active");
//     tabTerceiraTurma.classList.add("tab__label--active");
// });

// _a(selecionado, inativo){
//     tabSegundaTurma.tabIndex = 0;
//     tabSegundaTurma.ariaSelected = true;
//     paneSegundaTurma.style.display = "block";
// }
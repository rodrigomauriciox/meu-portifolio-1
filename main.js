/*--- menu mobile ---*/
const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

const LISTA_HABILIDADES = document.querySelectorAll('.icones-habilidades')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const HABILIDADE = LISTA_HABILIDADES[i]
    let idHabilidades = HABILIDADE.id
    
    HABILIDADE.onclick = function() {
        mostraTexto(idHabilidades)
    }
}

const descricoesHabilidades = {
    'habilidade-html': 'Tive a oportunidade de criar páginas dinâmicas no programa Alura Include',
    'habilidade-css': 'A ferramenta CSS é responsável pelo comportamento e estilo das páginas',
    'habilidade-javascript': 'Já com JavaScript pude desenvolver diversos projetos, todos estarão no meu Github.',
    'habilidade-javaoo': 'Criei alguns projetos com JavaOO que me deixaram bastante satisfeito',
    'habilidade-git': 'Vá no meu Github e confira!'
}

function mostraTexto (idHabilidades) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}


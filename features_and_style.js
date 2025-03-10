//Botão modo de iluminação
//Ao clicar no icone muda o icone, cor da pagina e salva a alteração
function updateState(state) {
    const imgElement = document.getElementById('icon_bright');
    if (state === 'dark') {
        imgElement.src = 'imagens/img_claro.png';
        document.body.style.backgroundColor = 'rgb(56, 56, 56)';
        document.body.style.color = 'rgb(255, 255, 255)';
        document.getElementById('arrow').style.color = 'rgb(255, 255, 255)';
    } else {
        imgElement.src = 'imagens/img_escuro.png';
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';
        document.body.style.color = 'rgb(0, 0, 0)';
        document.getElementById('arrow').style.color = 'rgb(0, 0, 0)';
    }
}

// Carregar o estado inicial do botão ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const currentState = localStorage.getItem('buttonState') || 'light';
    updateState(currentState);
});

// Adicionar evento de clique para o botão
Array.from(document.getElementsByClassName('bright')).forEach(function(element) {
    element.addEventListener('click', function() {
        const currentState = localStorage.getItem('buttonState') || 'light';
        const newState = currentState === 'light' ? 'dark' : 'light';
        localStorage.setItem('buttonState', newState);
        updateState(newState);
    });
});


//Slide do showcase
const imagens = [
    'imagens/img_place_holder_1.png',
    'imagens/img_place_holder_2.png',
    'imagens/img_place_holder_3.png'
];

let indice = 0;

function trocarImagem() {
    indice = (indice + 1) % imagens.length;
    document.getElementById('imagem_showcase').src = imagens[indice];
}

setInterval(trocarImagem, 4000);

//Faz a alteração da posição da barra lateral
/*Quando o mouse passar por cima da seta trigga a alteração da barra
barra lateral e altera sua visibilidade da seta*/

document.getElementById('arrow').addEventListener('mouseover', function() {
    document.getElementById('sidebar').style.left = '0';
    document.getElementById('arrow').style.display = 'none';
});

 
/*Se o mouse passar por cima da barra lateral e sair, a barra volta a seu estado 
original (fora do showroom), deixa a seta visivel*/

document.getElementById('sidebar').addEventListener('mouseleave', function() {
    document.getElementById('sidebar').style.left = '-250px';
    document.getElementById('arrow').style.display = 'block';
});
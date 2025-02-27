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

//Muda todo o layot de cor do site
/*Ao clicar no icone muda o icone*/
Array.from(document.getElementsByClassName('bright')).forEach(function(element) {
    element.addEventListener('click', function() {
        const imgElement = document.getElementById('icon_bright');
        if (imgElement.src.includes('img_escuro.png')) {
            imgElement.src = 'imagens/img_claro.png';
            document.body.style.backgroundColor = '#363636';
            document.body.style.color = 'white';
	    document.getElementById('arrow').style.color = 'white';
        } else {
            imgElement.src = 'imagens/img_escuro.png';
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            document.getElementById('arrow').style.color = 'black';
        }
    });
});

/* Chama as imagens da show case e as trocas a cada 3 segundos*/
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

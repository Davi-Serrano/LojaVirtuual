//Botão Menu
var btnmenu = document.getElementById("btnmenu")
var menu = document.getElementsByClassName("menu") [0];
btnmenu.addEventListener("click", function(){
    menu.classList.toggle("hide");

});




//Slider
let time = 2000,
currentImageIndex = 0,
images = document.querySelectorAll("#slider img")
max = images.length;

function nextImage (){
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0
    
     images[currentImageIndex].classList.add("selected")

}

function start(){
   setInterval(() => {
    
    nextImage()
    }, time)

}

window.addEventListener("load", start)

//Loja e Cariinho

const itens = [
    {
        id: 0,
        nome: 'camiseta',
        img: '../IMG/camisa vermelha.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'calça',
        img: '../IMG/calçapreta.jpeg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'tenis',
        img: '../IMG/tenis preto.jpg',
        quantidade: 0
    },
] 


inicializarLoja = () => {
    var containerProdutos = document.getElementById("produtos");
    itens.map((val)=>{
        containerProdutos.innerHTML += `
        
        <div class="produto-single">
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <a class="link" key="`+val.id+`" href="#carrinho">adicionar ao carrinho</a>
            <a href="camisa.html" target="-blanck"><div class="btn"> Compar </button></a>
        </div>
        
        
        `;
    })

}
inicializarLoja();

autalizarCarrinho = () => {

    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = ""
    itens.map((val)=>{
       
        if(val.quantidade > 0){
            
        containerCarrinho.innerHTML += `
       
        <p> `+val.nome+` | quantidade: `+val.quantidade+`</p>
        <hr>
        
        `;
        }
    })


}
   

var link = document.getElementsByClassName("link")

    for(var i = 0; i < link.length; i++){

        link[i].addEventListener("click", function(){
            let key = this.getAttribute("key");
            itens[key].quantidade++;
            autalizarCarrinho();
            return false;
        
        });
    }

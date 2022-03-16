gsap.registerPlugin(ScrollTrigger) //dessa forma você registra que tem esse plugin do gsap.

function botaoBuscar(){
    alert("Infelizmente não encontramos um resultado")
    window.location.reload()
}

function mudarBotao(elemento){
    if (!elemento.classList.contains("botao_produtos2")){ //! torna a senteça negativa
        elemento.classList.replace("botao_produtos", "botao_produtos2") //o replace é pra trocar por uma class que só tem lá no css. O primeiro valor é o que você tem o segundo é pelo que quer trocar
        elemento.innerHTML = "Desfazer"    
    } else{
        elemento.classList.replace("botao_produtos2", "botao_produtos")
        elemento.innerHTML = "Comprar"    
    }

}

gsap.from(".animate_header", {
    duration: 0.9,
    opacity: 0,
    y: -275,
})
gsap.from(".animate_logo", {
    duration: 0.9,
    y: -275,
})


gsap.from(".animate_banner_img", {
    duration: 3.6,
    opacity: 0,  
});

gsap.from(".animate_banner_texto", {
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.9,
})
gsap.from(".animate_primeiro_titulo", {
    duration: 3,
    opacity: 0,
    y: -45,
})
gsap.from(".animate_produtos", {
    duration: 2,
    opacity:0,
    stagger: 0.9,
    x: 120,
})
gsap.from(".animate_produtos2", {
    scrollTrigger: ".animate_produtos2",
    duration: 2,
    opacity:0,
    stagger: 0.9,
    x: 120,
})
gsap.from(".animate_titulo_produtos", {
    duration:4,
    opacity: 0,
    stagger: 4,
    y: -150,
})
gsap.from(".animate_titulo_produtos2", {
    scrollTrigger: ".animate_titulo_produtos2",
    duration:3,
    opacity: 0,
    stagger: 2,
    y: -150,
})

gsap.from(".animate_titulo_cards", {
    scrollTrigger: ".animate_titulo_cards",
    duration:2,
    opacity: 0,
    stagger: 2,
    y: -150,
})
gsap.from(".animate_cards", {
    scrollTrigger: ".animate_cards",
    duration:2,
    opacity:0,
    stagger:1.1,
})

gsap.from(".animate_footer", {
    scrollTrigger: ".animate_footer",
    duration: 1.2,
    opacity: 0,
    stagger: 1,
    y: 50,
})
gsap.from(".animate_footer_logo", {
    scrollTrigger: ".animate_footer",
    duration: 1.2,
    stagger: 1,
    y: 50,
})

// delay: 1, //esse é o tempo de demora. Quando abre o site, demora 1s até a animação deles começar

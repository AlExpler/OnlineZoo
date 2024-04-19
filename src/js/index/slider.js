let splideAbout = new Splide( '.splide', {
    type: 'loop',
    perMove: 1,
    perPage: 2+((window.innerWidth>960)?1:0),
    pagination: false,
    arrows: false,
    grid: {
        rows: 2,
        cols: 1,
        gap : {
            row: '1rem',
            col: '1.5rem',
        },
    },
} ).mount(window.splide.Extensions);
document.querySelector('.about__button-cards-prev').addEventListener('click', ()=>{
    splideAbout.go('-1');
})
document.querySelector('.about__button-cards-next').addEventListener('click', ()=>{
    splideAbout.go('+1');
})
splideAbout.on('resize', ()=>{
    splideAbout.options = {
        perPage: 1+((window.innerWidth>660)?1:0)+((window.innerWidth>960)?1:0),
        grid:{
            rows: 4-((window.innerWidth>660)?2:0),
        }
    };
})
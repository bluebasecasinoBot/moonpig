import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'transparent',
                    flexDirection:__p(['_p3','__flex'],'row'),
                    justifyContent:'flex-start',
                    padding:'20px 10px',
                    minHeight:'unset'
                    // transform:'unset'
                }
            }),
            id:'about'
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'3rem') === '3rem' ? '40%' : '100%'};background-image:url("./assets/moonPig__.png");background-size:contain;border-radius:15px;`
                },
                [
                    
                ],
                {
                    genericStyle:['bg_cover'],
                }
            ),
            __c(
                'div',
                {
                    style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px;'
                },
                [
                    __c('h1',{class:'',style:`color:#FFD6A5;text-shadow:0 0 5px rgba(255, 123, 84, 0.6);font-family:sunrise;font-weight:900;font-weight:100;font-size:${__p(['_p3','__size'],'3rem')}`},['ABOUT']),
                    __SYD.about_text()
                ]
            )
        ],
        {
            createState:{
                stateName:'_p3',
                state:{__size:'3rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'2rem',__flex:'column'}}],
                defState:{__size:'3rem',__flex:'row'}
            }
        }
    )
}

__SYD.about_text = () =>{
    return __c('p',{style:'font-size: 1.2rem;line-height: 1.75rem;max-width:500px;text-align:center;font-weight:500;'},[
        `$MOON PIG is the next viral meme coin on Solana, combining absurd humor with serious moon potential. Born from the meme-loving, degen-fueled trenches of crypto, this pig isn’t just rolling in mud—it’s launching past the stratosphere. No utility? No problem. Just pure, unadulterated meme magic and community-driven chaos. Join the oinking revolution before this piggy blasts off!`
    ])
}

import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v , manage_mediaQuery} from './sydneyLib/sydneyDom.js';

import './_body_p1.js';
import './_body_p2.js';
import './_body_p3.js';
import './_body_p4.js';
import './_body_p5.js';

__sS([
    {
        nameTag:'container',
        style:{
            height:'100vh',
            width:'100vw',
            background:`#0D0D0D url('https://www.transparenttextures.com/patterns/stardust.png') repeat`,
            // backgroundImage:'url(./assets/mainBg.gif)',
            backgroundAttachment: 'fixed',
            overflowY:'scroll',
            position:'relative',
            // fontFamily:'"Aladin", system-ui',
            // fontFamily:'Mantis Rumble_PersonalUseOnly',
            fontFamily:'sticker',
            // wordSpacing:'5px',
            // fontFamily:'sunrise',
            overflowX:'hidden',
            color:'#999999'
        }
    },
    {
        nameTag:'navBar',
        style:{
            width:'100%',
            display:'flex',
            padding:'5px 20px',
            columnGap:'30px',
            position:'sticky',
            top:'0',
            zIndex:'999',
            alignItems:'center',
            justifyContent:'space-between',
            color:"#FFD700"
        }
    }
])

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC.container()
        },
        [
            __SYD.navBar(),
            // __SYD._p1(),
            __SYD._p2(),
            __SYD._p3(),
            __SYD._p4(),
            __c('p',{style:'align-self:center;text-align:center;font-size: 1.2rem;line-height: 1.75rem;text-align:left;font-weight:800;width:100%;max-width:1000px;padding:50px 20px;text-align:center;'},[
                `Moonpig is a meme coin with no inherent value or promise of financial return. There is no official team or roadmap. The coin serves no practical purpose and is intended solely for entertainment.`//,__c('span',{class:'rainbow__text'},[" $TEFE"])
            ]),
            // __SYD._p5(),
            __c(
                'div',
                {
                    style:'height:fit-content;width:100%;padding:60px;background:#0D0D0D;display:flex;align-items:center;flex-direction:column;'
                },
                [
                    __c('p',{style:'font-size: .9rem;font-family:sunrise;line-height: 1.75rem;text-align:center;font-weight:900;color:#fff;width:100vw'},[
                        `© ${new Date().getFullYear()} All Right Reserved by $MOONPIG`
                    ])
                ]
            )
        ],
        {
            genericStyle:['bg_cover']
        }
    )
}

__SYD.navBar = () =>{
    return __c(
        'div',
        {
            style:__sC.navBar({
                method:'add',
                style:{
                    height:__p(['navBar','_h'],'130px'),
                    // backgroundImage:`url(./assets/nav_bg.png)`,
                    // backgroundPosition:'100% 100%'
                }
            }),
            class:"navBar"
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['navBar','l_size'],'100px')};min-width:${__p(['navBar','l_size'],'100px')};border-radius:50%;background-image:url('./assets/logo.jpeg');`,
                    class:"logo-wrapper"
                },[],{genericStyle:['bg_fit']}
            ),
            __c(
                'div',
                {
                    style:`display:${__p(['navBar','__nav_d'],'flex')};width:fit-content;height:fit-content;justify-content:center;column-gap:50px;padding:5px;`,
                },
                [
                    __SYD.nav_b_text('Who is MOONPIG?','_p3'),
                    // __SYD.nav_b_text('Tokenomics','_p5'),
                    __SYD.nav_b_text('How to Buy','_p4'),
                ]
            ),
            __SYD.buyNowBtn(),
            __c(
                'div',
                {
                    style:`height:50px;width:50px;background-image:url('./assets/menu.png');display:${__p(['navBar','__nav_d'],'flex') === 'flex' ? 'none' : 'block'};`,class:'click'
                },
                [

                ],
                {
                    events:{
                        onclick:() =>{
                            const mobileMenu = __g('mobileMenu');
                            // console.log(__v['mobileMenu'])
                            switch(mobileMenu._d)
                            {
                                case 'none':
                                    mobileMenu._d = 'flex';
                                    let _t1 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._op = '1';
                                        __u('mobileMenu',{type:'a',value:mobileMenu});
                                        clearTimeout(_t1)
                                    },100);
                                break;
                                case 'flex':
                                    mobileMenu._op = '0'
                                    let _t2 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._d = 'none';
                                        __u('mobileMenu',{type:'a',value:mobileMenu})
                                        clearTimeout(_t2)
                                    },300)
                            }
                            __u('mobileMenu',{type:'a',value:mobileMenu});
                            __v['mobileMenu'].focus();
                        }
                    },
                    genericStyle:['bg_fit']
                }
            ),
            __SYD.mobileMenu()
        ],
        {
            createState:{
                stateName:'navBar',
                state:{_h:'130px',l_size:'100px'}
            },
            mediaQuery:{
                query:[
                    {size:'<500px',prop:{_h:'100px',l_size:'70px'}},
                    {size:'<800px',prop:{__nav_d:'none'}}
                ],
                defState:{_h:'130px',l_size:'100px',__nav_d:'flex'}
            },
            genericStyle:['bg_cover']
        }
    )
}

__SYD.buyNowBtn = () =>{
    return __c('a',{href:'https://dexscreener.com/solana/F8R9okKt8PvygkZ6bCimxELYb2kUn9E3FDdugfeRUYJw',target:'blank',style:`display:${__p(['navBar','__nav_d'],'block')};padding:15px 20px;text-decoration:none;font-size:13px;`,class:' btns_style'},['Buy Now'],{genericStyle:['bg_fit']})
}

__SYD.nav_b_text = (text,click) =>{
    return __c(
        'p',
        {
            style:'font-size:13px;cursor:pointer;font-family:sunrise;font-weight:700;line-height:150%;'
        },
        [
            text
        ],
        {
            events:{
                onclick:() =>{
                    switch(true)
                    {
                        case click === 'moonPigLink':
                            window.location = 'https://dexscreener.com/solana/F8R9okKt8PvygkZ6bCimxELYb2kUn9E3FDdugfeRUYJw'
                        break;
                        default:
                            __v[click].scrollIntoView();
                            __v['mobileMenu'].blur()
                            
                    }
                }
            }
        }
    )
}

__SYD.mobileMenu = () =>{
    return __c(
        'div',
        {
            style:`height:fit-content;width:fit-content;padding:20px 10px;display:${__p(['mobileMenu','_d'],'none')};flex-direction:column;row-gap:20px;background: #0D0D0D;border: 2px solid #FF7B54;box-shadow:0 4px 12px rgba(255, 123, 84, 0.25),0 6px 20px rgba(0, 0, 0, 0.6);border-radius:10px;border-top-right-radius:unset;border-bottom-right-radius:unset;position:absolute;top:100%;right:0;opacity:${__p(['mobileMenu','_op'],'0')};transition:opacity .3s linear;border-right:unset;border-top:unset;`,
            tabindex:'1',
            class:'mobile_menu'
        },
        [
            __SYD.nav_b_text('About','_p3'),
            // __SYD.nav_b_text('Tokenomics','_p5'),
            __SYD.nav_b_text('How to Buy','_p4'),
            __SYD.nav_b_text('Buy Now','moonPigLink'),

        ],
        {
            createState:{
                stateName:'mobileMenu',
                state:{_d:'none',_op:'0'}
            },
            events:{
                onblur:() =>{
                    const mobileMenu = __g('mobileMenu');
                    console.log('hey')
                    mobileMenu._op = '0'
                    let _t2 = setTimeout(() =>{
                        const mobileMenu = __g('mobileMenu');
                        mobileMenu._d = 'none';
                        __u('mobileMenu',{type:'a',value:mobileMenu})
                        clearTimeout(_t2)
                    },300)
                    __u('mobileMenu',{type:'a',value:mobileMenu})
                }
            }
        }
    )
}

__m(__SYD.container())

window.addEventListener("DOMContentLoaded" , e =>{
    manage_mediaQuery(window.innerWidth)
})

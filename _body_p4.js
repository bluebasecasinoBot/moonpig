import { __c , __SYD, __sC, __p} from "./sydneyLib/sydneyDom.js"



__SYD._p4 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    justifyContent:'flex-start',
                    paddingLeft:'30px',
                    paddingRight:'30px',
                    background:'transparent',
                    padding:'20px 10px'
                }
            }),
            id:'buyGuide'
        },
        [
            __c('h1',{class:"" , style:`color:#FFD6A5;text-shadow:0 0 5px rgba(255, 123, 84, 0.6);font-family:sunrise;font-weight:900;padding:10px 0;font-weight:100;line-height:150%;font-size:${__p(['_p4','__size'],'4rem')}`},['How To Buy']),
            __SYD.buy_tabs(
                {content:`Make sure you have Solana (SOL) in your wallet. You can buy SOL on exchanges like Binance, Coinbase, or Kraken, then transfer it to your Solana wallet.` ,title:`Get Some SOL`}
            ),
            __SYD.buy_tabs({
                content:`Use a Phantom or Solflare wallet to store your $MOONPIG tokens. Ensure it’s funded with enough SOL for transactions.`,title:`Set Up a Solana Wallet`
            }),
            __SYD.buy_tabs({
                content:`copy the CA from moonpig.meme by click on the CA button, then swap for $moonpig` , title:"Go to the Swap Platform"
            }),
            __SYD.buy_tabs({
                content:`Enter the amount of SOL you want to swap, confirm the transaction, and wait for the tokens to appear in your wallet.`,title:` Swap SOL for $MOONPIG`
            }),
            __SYD.buy_tabs({
                content:`You’re now part of the MOONPIG army! Hold, meme, and watch MOONPIG leap to the moon! 🚀🐷💰.`,title:`HODL & Join the Community`
            }),
        ],
        {
            createState:{
                stateName:'_p4',
                state:{__size:'4.5rem',__flex_child:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem'}},{size:'<700px',prop:{__flex_child:'column'}}],
                defState:{__size:'4.5rem',__flex_child:'row'}
            }
        }
    )
}

__SYD.buy_tabs = ({title = '' , content = ''}) =>{
    return __c(
        'div',
        {
            style:'width:100%;max-width:1000px;height:fit-content;border-radius:30px;background:linear-gradient(145deg, #1A1A1A, #0F0F0F);',
            class:"tabs_3d"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:250px;padding:10px 20px;width:100%;background:unset;display:flex;align-items:${__p(['_p4','__flex_child'],'row') === 'row' ? 'center' : 'flex-start'};column-gap:20px;row-gap:20px;flex-direction:${__p(['_p4','__flex_child'],'row')};`
                },
                [
                    __c('div',{style:'min-height:100px;min-width:100px;background-image:url("./assets/moonPigMain.png");border-radius:50%;background-color:#0D0D0D'},[],{genericStyle:['bg_fit']}),
                    __c(
                        'div',
                        {
                            style:'width:100%'
                        },
                        [
                            __c('p',{style:'font-size:24px;text-align:left;text-transform:capitalize;color:#FFD6A5;font-family:sunrise;font-weight:900;margin-bottom:15px;line-height:150%;'},[title]),
                            __c('p',{style:'font-size: 1.1rem;line-height: 1.2rem;text-align:left;font-weight:500;color:#F1F1F1'},[
                                content
                            ])
                        ]
                    )
                ]
            )
        ]
    )
}

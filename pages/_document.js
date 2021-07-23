import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document{

    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4RW3XPN60B"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html:`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                            
                                gtag('config', 'G-4RW3XPN60B');
                            `
                        }}
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html:`
                                !function(f,b,e,v,n,t,s)
                                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                n.queue=[];t=b.createElement(e);t.async=!0;
                                t.src=v;s=b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t,s)}(window,document,'script',
                                'https://connect.facebook.net/en_US/fbevents.js');
                                fbq('init', '513130139946084'); 
                                fbq('track', 'PageView');
                            `
                        }}
                    />
                    <noscript>
                        <img 
                            height="1" 
                            width="1" 
                            src="https://www.facebook.com/tr?id=513130139946084&ev=PageView&noscript=1"
                        />
                    </noscript>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id="fb-root"></div>
                    <div id="fb-customer-chat" class="fb-customerchat"></div>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                var chatbox = document.getElementById('fb-customer-chat');
                                chatbox.setAttribute("page_id", "112101414475569");
                                chatbox.setAttribute("attribution", "biz_inbox");
                                
                                window.fbAsyncInit = function() {
                                    FB.init({
                                        xfbml            : true,
                                        version          : 'v11.0'
                                    });
                                };

                                (function(d, s, id) {
                                    var js, fjs = d.getElementsByTagName(s)[0];
                                    if (d.getElementById(id)) return;
                                    js = d.createElement(s); js.id = id;
                                    js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
                                    fjs.parentNode.insertBefore(js, fjs);
                                }(document, 'script', 'facebook-jssdk'));
                            `,
                        }}
                    />
                </body>
            </Html>
        )
    }

}

export default MyDocument
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document{

    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="es">
                <Head />
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
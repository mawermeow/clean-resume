import Document, { DocumentContext, DocumentInitialProps ,Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        return await Document.getInitialProps(ctx)
    }
    render() {
        return (
            <Html lang="zh-Hant" style={{scrollBehavior:'smooth'}}>
                <Head/>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }

}

export default MyDocument
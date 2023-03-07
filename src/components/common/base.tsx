import { FC, ReactNode } from "react";
import Script from 'next/script'
import Head from 'next/head';
import * as U from '../../utils'

interface Props {
  tdk?: U.T.TDK,
  children: ReactNode
}

const Base: FC<Props> = ({tdk, children}) => {
  // @ts-ignore
  return (
    <div>
      <Head>
        <title>{tdk?.title || U.C.DEFAULT_TITLE}</title>
        <meta name="keywords" content={tdk?.keywords || U.C.DEFAULT_KEYWORDS}/>
        <meta name="description" content={tdk?.description || U.C.DEFAULT_DESCRIPTION}/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        // Google tag (gtag.js)
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y3RC1K10EW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y3RC1K10EW');
        `}
        </Script>
        {children}
      </main>
    </div>
  )
}

export default Base;



import { FC, ReactNode } from "react";
import Head from 'next/head';
import * as U from '../../utils'

interface Props {
  tdk?: U.T.TDK,
  children: ReactNode
}

const Base: FC<Props> = ({tdk, children}) => {
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
        {children}
      </main>
    </div>
  )
}

export default Base;



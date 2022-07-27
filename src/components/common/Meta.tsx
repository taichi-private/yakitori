import Head from 'next/head'

type MetaProps = {
  title: string,
  description: string,
}

const Meta = (props: MetaProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta;
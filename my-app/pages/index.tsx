import Head from 'next/head'
import Article from '../components/Article'


export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Web Dev News</title>
        <meta name='keywords' content='web development, programming'></meta>  
      </Head>
        <Article articles={articles} />
    </div>
  )
}

// Fetching data
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
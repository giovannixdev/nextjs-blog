import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import {db} from '../lib/db'


export default function Home({ data, allPostsData }) {
  console.log("here", allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <ul>
          {allPostsData.map(({ id, date, title }) =>

            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>

          )}
        </ul>

      </section>
    </Layout >
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const data = await db()
  console.log('dataaa', data)

  return {
    props: {
      data: {
        name: data[0].name,
        age: data[0].age
      },
      allPostsData: allPostsData
    },
  }
}

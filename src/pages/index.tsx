import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Post from '~/components/organisms/Post'
import OGP from '~/components/ogp'
import styles from './styles.module.scss'
import contents, { Meta } from '~/libs/api/contents'

interface P {
  metaList: Meta[]
}

const Index: NextPage<P> = ({ metaList }) => {
  const latestMeta = metaList[0]
  const title = "yKicchan's blog"
  const description = `Web エンジニアが気ままにアウトプットしてる技術ブログ。\n${
    latestMeta.title
  }\n${latestMeta.tags.join(', ')}`

  return (
    <>
      <OGP
        meta={{
          title,
          description,
          path: '/',
        }}
      />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <ul className={styles.posts}>
        {metaList.map((meta) => (
          <li key={meta.id}>
            <Post meta={meta} />
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<P> = async () => {
  const res = await contents.list()
  return {
    props: {
      metaList: res.contents,
    },
  }
}

export default Index

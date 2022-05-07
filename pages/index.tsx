import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {

    const styles = {
      container: `lg:max-w-7xl mx-auto max-h-screen overflow-hidden`,
      mainContainer: `grid grid-cols-9`,
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <main className={styles.mainContainer}>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home

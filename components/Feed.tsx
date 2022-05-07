import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import TweetBox from './TweetBox'

function Feed() {

    const styles = {
        container: `col-span-7 lg:col-span-5`, 
        refreshContainer: `flex items-center justify-between`,
        home: `p-5 pb-0 text-xl font-bold`,
        refresh: `mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125`,
    }

  return (
  <div className={styles.container}>
      <div className={styles.refreshContainer}>
          <h1 className={styles.home}>Home</h1>
          <RefreshIcon className={styles.refresh}/>
      </div>

      <div>
      <TweetBox />
      </div>
    </div>
  )
}

export default Feed
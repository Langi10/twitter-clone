import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {

    const styles = {
        container: `col-span-2 mt-2 px-2 hidden lg:inline`,
        searchContainer: `mt-2 flex items-center space-x-2 bg-gray-100 p-3 rounded-full`,
        searchIcon: `h-5 w-5 text-gray-400`,
        searchInput: `flex-1 bg-transparent outline-none`,
    }

  return (
    <div className={styles.container}>
        {/* Search */}
        <div className={styles.searchContainer}>
            <SearchIcon className={styles.searchIcon} />
            <input
            className={styles.searchInput} 
            type="text" 
            placeholder="Search Twitter" 
            />
        </div>

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="langi_creative"
        options={{height: 1000}} 
        />
    </div>
  )
}

export default Widgets
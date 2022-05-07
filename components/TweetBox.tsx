import React from 'react'
import { 
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon 
 } from '@heroicons/react/outline' 

function TweetBox() {
    
    const styles = {
        container:``,
        avatar:`h-14 w-14 rounded-full object-cover mt-4`,
        icon:`h-5 w-5`,
        inputIcon: `flex`,
    }

    return (
    <div>
        <img
        className={styles.avatar}
        src="https://links.papareact.com/gll" 
        alt=""
        />
        <div>
            <form>
                <input type="text" placeholder="What's happening?"/>
                <div className={styles.inputIcon}>
                    <PhotographIcon className={styles.icon} />
                    <SearchCircleIcon className={styles.icon} />
                    <EmojiHappyIcon className={styles.icon} />
                    <CalendarIcon className={styles.icon} />
                    <LocationMarkerIcon className={styles.icon} />
                </div>
                <button type="submit">Tweet</button>
            </form>
        </div>
    </div>
  )
}

export default TweetBox
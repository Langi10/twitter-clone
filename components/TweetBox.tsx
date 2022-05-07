import React, { useState } from 'react'
import { 
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon 
 } from '@heroicons/react/outline' 

function TweetBox() {

    const [input, setInput] = useState<string>('')

    const styles = {
        container:`flex items-center`,
        wrapper:`flex flex-1 items-center pl-2`,
        header:`flex space-x-2 p-5`,
        avatar:`h-14 w-14 rounded-full object-cover mt-4`,
        icon:`h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150`,
        input:`h-24 w-full text-xl outline-none placeholder:text-xl`,
        inputIcon: `flex space-x-2 text-twitter flex-1`,
        tweetButton: `bg-twitter text-white font-bold rounded-full px-5 py-2 disabled:opacity-50`,
        form: `flex flex-1 flex-col`,
    }

    return (
    <div className={styles.header}>
        <img
        className={styles.avatar}
        src="https://links.papareact.com/gll" 
        alt=""
        />
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.input} 
                type="text" 
                placeholder="What's happening?"
                />
                <div className={styles.container}> 
                    <div className={styles.inputIcon}>
                        <PhotographIcon className={styles.icon} />
                        <SearchCircleIcon className={styles.icon} />
                        <EmojiHappyIcon className={styles.icon} />
                        <CalendarIcon className={styles.icon} />
                        <LocationMarkerIcon className={styles.icon} />
                    </div>
                <button 
                disabled={!input}
                className={styles.tweetButton} 
                type="submit">
                    Tweet
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox
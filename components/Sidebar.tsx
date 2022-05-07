import React from 'react'
import { 
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
 } from '@heroicons/react/outline' 
import SidebarRow from './SidebarRow'

const Sidebar = () => {

    const styles = {
        container: `col-span-2 flex flex-col items-center px-4 md:items-start`,
        wrapper: `flex-1`,
        image: `m-3 h-10 w-10`,
    }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <img 
        className={styles.image} 
        src="https://links.papareact.com/drq" 
        alt="" 
        />
        <SidebarRow  Icon={HomeIcon} title="Home" />
        <SidebarRow  Icon={HashtagIcon} title="Explore" />
        <SidebarRow  Icon={BellIcon} title="Notifications" />
        <SidebarRow  Icon={MailIcon} title="Messages" />
        <SidebarRow  Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRow  Icon={CollectionIcon} title="Lists" />
        <SidebarRow  Icon={UserIcon} title="Sign In" />
        <SidebarRow  Icon={DotsCircleHorizontalIcon} title="More" />
        </div>
    </div>
  )
}

export default Sidebar
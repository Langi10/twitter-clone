import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string

}

function SidebarRow({Icon, title}: Props) {

    const styles = {
        container: `flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 group`,
        icon: `h-6 w-6`,
        title: `hidden md:inline-flex group-hover:text-twitter text-base font-light lg:text-xl`,
    }

  return (
    <div className={styles.container}>
        <Icon className={styles.icon}/>
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default SidebarRow
import Link from 'next/link'
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link
        href='https://www.youtube.com/@bastiensoreau6156'
        target='_blank'
        className='hover:text-accent transition-all duration-300' rel='noreferrer'
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href='https://www.instagram.com/bastiensoreau/'
        target='_blank'
        className='hover:text-accent transition-all duration-300' rel='noreferrer'
      >
        <RiInstagramLine />
      </Link>
      <Link
        href='https://www.facebook.com/bastien.soreau'
        target='_blank'
        className='hover:text-accent transition-all duration-300' rel='noreferrer'
      >
        <RiFacebookLine />
      </Link>
    </div>
  )
}

export default Socials

import Image from 'next/image';
import Link from 'next/link';

type PostCardProps = {
  post: {
    userId: number,
    id: number,
    title: string,
    body: string
  }
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className='w-72 mb-5 rounded-md overflow-hidden shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-700 transition-shadow duration-200 ease-in-out'>
      <div className='relative'>
        <div className='h-64 w-10/12 relative rounded-md overflow-hidden'>
          <Image
            src={'/camo-vest.png'}
            alt='post'
            fill
            priority
            className='object-fit'
          />
        </div>
        <span className='-rotate-90 absolute top-28 -right-4'>01.01.2024</span>
      </div>
      <div className='m-4'>
        <h1 className='font-bold text-xl'>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={'/blog/post'} className='underline' >READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard
import Image from "next/image";

const BlogDetails = () => {
  return (
    <div className="md:flex md:gap-10">
      <div className="hidden md:block relative flex-1 h-[calc(100vh-200px)]">
        <Image
          src={'/camo-vest.png'}
          alt='post'
          fill
          priority
          className='object-fit'
        />
      </div>

      <div className="md:flex-2 flex flex-col gap-10">
        <h1 className="font-bold text-3xl">Title</h1>
        <div className="relative flex flex-col gap-2 md:flex-row md:gap-10">
          <div>
            <Image
              src={"/noavatar.png"}
              alt="avatar"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-gray-700">Author</span>
            <span className="font-medium">Terry Jefferson</span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-gray-700">Published</span>
            <span className="font-medium">01.01.2024</span>
          </div>

        </div>

        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, cum quam? Voluptate eligendi rerum dolorem labore provident delectus perferendis debitis facilis, repellendus consequatur illo doloremque fugit aliquid temporibus facere sequi?
        </div>
      </div>
    </div>
  )
}

export default BlogDetails;
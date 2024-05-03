import Image from "next/image";

const HomePage = () => {
  return (
		// Container
    <main className="flex flex-col-reverse gap-5 md:flex-row md:gap-7 lg:gap-10" >
			{/* Text container */}
      <section className="flex flex-col gap-5 md:flex-1 lg:gap-12">
				<h1 className="font-bold text-xl sm:text-2xl lg:text-5xl">Creative Thoughts Agency</h1>
				<p className="text-base md:text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat aspernatur quasi neque, saepe mollitia ut ipsa nostrum ipsum illo inventore doloribus reprehenderit ex distinctio, laboriosam iste? Soluta, amet aperiam?
				</p>

				<div className="flex gap-5">
					<button className="p-2 md:p-3 min-w-28 cursor-pointer border-none rounded-md bg-blue-400 text-white hover:bg-blue-300 transcolors">Learm More</button>
					<button className="p-2 md:p-3 min-w-28 cursor-pointer border-none rounded-md bg-gray-500 text-black hover:bg-gray-400 transcolors">Contact</button>
				</div>

				<div className="relative w-2xl h-12 grayscale">
					<Image src={'/brands.png'} alt="brands" fill />
				</div>

      </section>

			{/* Image container */}
      <section className="relative h-[calc(100vh-400px)] md:flex-1 md:h-auto">
				<Image src={'/hero.gif'} alt="hero" fill className="object-contain" />
      </section>
    </main>
  )
}

export default HomePage;
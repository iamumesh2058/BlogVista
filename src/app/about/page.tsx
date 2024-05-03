import Image from "next/image";

const aboutArray = [
	{
		numOfYears: "10 k+",
		description: "Yeear of experience"
	},
	{
		numOfYears: "10 k+",
		description: "Yeear of experience"
	},
	{
		numOfYears: "10 k+",
		description: "Yeear of experience"
	},
]

const About = () => {
	return (
		<main className="flex flex-col-reverse gap-4 md:flex-row md:gap-10 lg:20">
			{/* Text container */}
			<div className="md:flex-1 flex flex-col gap-4 md:gap-8 lg:gap-12">
				<h2 className="text-base md:text-xl lg:text-2xl font-bold text-blue-600">About Agency</h2>

				<h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">We create digital ideas that are bigger, bolder, braver</h1>

				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dicta ipsa voluptatum, doloremque officiis quae velit ea debitis assumenda quod illum cumque ipsum ipsam nobis enim fugit impedit illo temporibus.</p>

				<div className="flex justify-between">
					{
						aboutArray.map((about, index) => {
							return(
								<div key={index} className="">
										<h1 className="text-blue-600">{about.numOfYears}</h1>
										<p>{about.description}</p>
								</div>
							)
						})
					}
				</div>
			</div>

			{/* Image container */}
			<div className="relative h-[calc(100vh-400px)] md:flex-1 md:h-auto">
				<Image 
					src={'/about.png'}
					alt="about"
					fill
					className="object-contain"
				/>
			</div>
		</main>
	)
}

export default About;
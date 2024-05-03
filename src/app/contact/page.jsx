import Image from "next/image";

const Contact = () => {
	return (
		<main className="flex flex-col gap-5 md:flex-row md:gap-8 lg:gap-10">
			<div className="relative h-[calc(100vh-500px)] md:flex-1 md:h-auto">
				<Image
					src={'/contact.png'}
					alt="Contact Page"
					fill
					className="object-contain"
				/>
			</div>

			<div className="md:flex-1">
				<form 
					action={""}
					className="flex flex-col gap-2 md:gap-3 lg:gap-4"
				>
					<input className="inputForm" type="text" placeholder="Name and Surname" />
					<input className="inputForm" type="email" placeholder="Email Address" />
					<input className="inputForm" type="text" placeholder="Phone Number (Optional)" />
					<textarea 
						name=""
						id=""
						cols="20"
						rows="10"
						placeholder="Message"
						className="inputForm"
					></textarea>
					<button className="bg-blue-500 text-white p-2 md:p-3 rounded-md">Send</button>
				</form>
			</div>
		</main>
	)
}

export default Contact;
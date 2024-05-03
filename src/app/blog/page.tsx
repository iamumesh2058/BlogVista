import PostCard from "@/components/postCard/postCard";

// type PostCardProps = {
//   post: {
//     userId: number,
//     id: number,
//     title: string,
//     body: string
//   }
// }

type Post = {
	userId: number,
	id: number,
	title: string,
	body: string
}

const getData = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");

	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
}

const Blog = async () => {
	const posts = await getData();
	const newPost = {
		userId: 10,
		id: 10,
		title: "something",
		body: 'nothing'
	}

	return (
		<div className="flex justify-evenly flex-wrap gap-10 my-4">
			{
				posts.map((post: Post) => {
					return(
						<PostCard key={post.id} post={post} />
					)
				})
			}
		</div>
	)
}

export default Blog;
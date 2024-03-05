export default function Page({ params }) {
  // throw new error("An error occured")

  let languages = ["python", "javascript", "java", "cpp", "cs"]

  if(languages.includes(params.slug))
    return <div>My Post: {params.slug}</div>
  else
    return <div>Post not found</div>

  // Fetch your blog post by its slug
  return <div>My Post: {params.slug}</div>
}
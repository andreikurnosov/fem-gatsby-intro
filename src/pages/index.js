import React from "react"
import usePosts from "../hooks/use-posts"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostPreview from "../components/post-preview"

export default () => {
  const posts = usePosts()
  return (
    <>
    <Hero />
    <Layout>
      <h2>Read my blog!</h2>
      {posts.map(post => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </Layout>
  </>
  )
}

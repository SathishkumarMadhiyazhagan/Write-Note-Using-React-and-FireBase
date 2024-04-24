import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle"
import { PostCard } from "../index";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { SkeletonCard } from "../../components";

export const HomePage = () => {
  useTitle("Home");

  const [posts, setPosts] = useState(new Array(2).fill(false));
  const [toggle, setToggle] = useState(false)

  const colRef = collection(db, 'posts');

  useEffect(() => {
    async function getAllPost() {
      const data = await getDocs(colRef);
      setPosts(data.docs.map((document) => ({ ...document.data(), id: document.id })))
    }
    getAllPost();
  }, [toggle]);  // eslint-disable-line

  return (
    <main className="px-4 lg:px-6">
      {posts.map((post, index) => (
        post ? (
          <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ) : (
          <SkeletonCard key={index} />
        )
      ))}
    </main>
  )
}

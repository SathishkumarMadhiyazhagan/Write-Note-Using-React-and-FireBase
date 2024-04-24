import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebase/config";
import { Link } from "react-router-dom";

export const PostCard = ({ post, toggle, setToggle }) => {
    const { id, title, description, author } = post;

    const isAuth = JSON.parse(localStorage.getItem("isAuth"));

    const handleDeletePost = () => {
        let postDelete = doc(db, 'posts', id);
        deleteDoc(postDelete);
        setToggle(!toggle);
    }

    return (
        <div className="max-w max-h-auto p-6 bg-white my-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mx-4">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
            <div className="flex flex-wrap justify-between font-medium items-center">
                <span className="p-2.5 bg-gray-300 rounded">{author.name}</span>
                {isAuth && (author.uid === auth.currentUser.uid) && (<div>
                    <Link to={`/update/${id}`} className="py-2.5">
                        <svg className="w-6 h-6 ms-2.5 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>
                    </Link>
                    <button onClick={handleDeletePost} className="py-2.5">
                        <svg className="w-6 h-6 ms-2.5 text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>
                    </button>
                </div>)}
            </div>
        </div>
    )
}

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useTitle } from "../../hooks/useTitle"
import { auth, db } from "../../firebase/config";
import { useNavigate } from "react-router";

export const CreateNotePage = () => {
  useTitle('Create Post');

  const navigate = useNavigate();

  const colRef = collection(db, 'posts');

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoc(colRef, {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid
      },
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }).then(() => {
      navigate('/');
    })
  }
  return (
    <main className="px-4 lg:px-6">
      <h1 className="mb-8 text-4xl text-center text-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
        Create Note
      </h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input type="text" id="title" name="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Title" maxLength={50} required />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <textarea type="text" id="message" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" maxLength={600} required></textarea>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Note</button>
      </form>
    </main>
  )
}

import { updateDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";
import { useTitle } from "../../hooks/useTitle"
import { db } from "../../firebase/config";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";


export const UpdateNotePage = () => {

    useTitle('Update Post');
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const docRef = doc(db, 'posts', id);
                const data = await getDoc(docRef);
                if (data.exists()) {
                    setNote({ id: data.id, ...data.data() });
                } else {
                    console.log("No such document!");
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        fetchNote();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateDoc(doc(db, 'posts', id), {
                title: event.target.title.value,
                description: event.target.description.value,
                updatedAt: serverTimestamp()
            });
            navigate('/');
        } catch (error) {
            console.error("Error updating document:", error);
        }
    };

    const handleCancel = () => {
        navigate('/');
    }

    return (
        <main className="px-4 lg:px-6">
            <h1 className="mb-8 text-4xl text-center text-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                Update Note
            </h1>
            {!loading && note && (
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" id="title" name="title" defaultValue={note.title} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Title" maxLength={50} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea type="text" id="message" name="description" defaultValue={note.description} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" maxLength={600} required></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Note</button>
                    <button onClick={handleCancel} className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                </form>
            )}
        </main>
    );
}

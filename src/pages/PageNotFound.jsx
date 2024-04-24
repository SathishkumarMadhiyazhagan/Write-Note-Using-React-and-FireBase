import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle";
import PageNotFoundImg from "../assets/images/PageNotFoundImg.jpg"

export const PageNotFound = () => {
    useTitle("Page Not Found")
    return (
        <main className="px-4 lg:px-6">
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-4xl text-gray-700 font-bold my-10 dark:text-white text-center">404, Oops!</p>
                    <div className="max-w-xs">
                        <img src={PageNotFoundImg} alt="EBook Page Not Found" />
                    </div>
                </div>
                <div className="flex justify-center my-4">
                    <Link to="/">
                        <button type="button" className="w-50 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">Back To Home</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

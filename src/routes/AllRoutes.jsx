import { Route, Routes } from "react-router"
import { CreateNotePage, HomePage, PageNotFound, UpdateNotePage } from "../pages"
import { ProtectedRoute } from "./ProtectedRoute"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<ProtectedRoute><CreateNotePage /></ProtectedRoute>} />
      <Route path='/update/:id' element={<ProtectedRoute><UpdateNotePage /></ProtectedRoute>} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

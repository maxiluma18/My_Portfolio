import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import NotFound from "./NotFounds"
import ProjectDetail from "./ProjectDetail"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
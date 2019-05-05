import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from "./components/AddBlog.vue"
import SingleBlog from "./components/SingleBlog.vue"
import EditBlog from "./components/EditBlog.vue"


export default (
    [
        { path: "/blog/dist", component: ShowBlogs },
        { path: "/blog/dist/add", component: AddBlog },
        { path: "/blog/dist/blog/:id", component: SingleBlog },
        { path: "/blog/dist/edit/:id", component: EditBlog }
    ]
)
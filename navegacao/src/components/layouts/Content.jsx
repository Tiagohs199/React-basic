import './Content.css'
import { Route, Routes } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFind from '../../views/examples/NotFind'



const Content = props => (
    <main className='Content'>

        <Routes>
            <Route exact path="/"  element={<Home/>} />

            <Route exact path="/about"  element={<About/>} />
            
            <Route exact path="/param/:id"  element={<Param/>} />

            <Route exact path="/*"  element={<NotFind/>} />

        </Routes>
    </main>
)
export default Content
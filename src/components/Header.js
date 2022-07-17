import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div class="bg-stone-600 grid grid-cols-auto md:grid-cols-2 p-5">
            <div class="font-serif text-2xl text-slate-200">Neos Clocktower Fans</div>
            <div class="space-x-4 text-xl text-slate-100 text-serif md:text-right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/archive">Archive</Link>
                <Link to="/credits">Credits</Link>
            </div>
        </div>
    )
}

export default Header
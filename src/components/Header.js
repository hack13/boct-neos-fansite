import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div class="bg-stone-600 flex flex-row p-5">
            <div class="font-serif text-2xl text-slate-200">Blood on the Clocktower in NeosVR</div>
            <div class="grow"></div>
            <div class="space-x-4 text-xl text-slate-100 text-serif">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/archive">Archive</Link>
                <Link to="/credits">Credits</Link>
            </div>
        </div>
    )
}

export default Header
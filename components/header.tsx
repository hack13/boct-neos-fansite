import Link from 'next/link'

const Header = () => {
    return (
        <div className="bg-stone-600 grid grid-cols-auto md:grid-cols-2 p-5">
            <div className="font-serif text-2xl text-slate-200">Neos Clocktower Fans</div>
            <div className="space-x-4 text-xl text-slate-100 text-serif md:text-right">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/archive"><a>Archive</a></Link>
                <Link href="/credits"><a>Credits</a></Link>
            </div>
        </div>
    )
}

export default Header
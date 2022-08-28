const Footer = () => {
    return (
        <div className="bg-stone-800 grid grid-cols-auto md:grid-cols-2 p-5">
            <div>
                <div className="text-slate-300 text-xl">Disclaimers</div>
                <div className="text-slate-200 text-sm">
                    <p>This is a fan site, of a fan project in <a href="https://neosvr.com/" rel="noreferrer" target="_blank" className="underline">NeosVR</a>, of <a href="https://bloodontheclocktower.com" rel="noreferrer" target="_blank" className="underline">Blood on the Clocktower</a></p>
                    <p>Blood on the Clocktower is a trademark of Steven Medway and The Pandemonium Institute.</p>
                    <p>This project and its website are provided free of charge and not affiliated with The Pandemonium Institute in any way.</p>
                    <p>All video and imagury from NeosVR are respective IP of the creators of in game assets</p>
                </div>
            </div>
            <div className="text-lg text-slate-100 text-serif items-end text-right">
                <p>Site Managed by Hack13</p>
                <p className="text-sm">Hosted on Vercel</p>
                <p className="text-sm">Video Hosting on Bunny.net</p>
                <p className="text-sm">Styled with TailwindCSS</p>
                <p className="text-sm">Created with NextJS</p>
            </div>
        </div>
    )
}

export default Footer
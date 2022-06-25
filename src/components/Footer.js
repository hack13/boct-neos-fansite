const Footer = () => {
    return (
        <div class="bg-stone-800 flex flex-row p-5">
            <div>
                <div class="text-slate-300 text-xl">Disclaimers</div>
                <div class="text-slate-200 text-sm">
                    <p>This is a fan site, of a fan project in <a href="https://neosvr.com/" rel="noreferrer" target="_blank" class="underline">NeosVR</a>, of <a href="https://bloodontheclocktower.com" rel="noreferrer" target="_blank" class="underline">Blood on the Clocktower</a></p>
                    <p>All Blood on the Clocktower images are intelectual property of their respective owners</p>
                    <p>All video and imagury from NeosVR are respective IP of the creators of in game assets</p>
                    <p>There is <strong>NO MONEY MADE</strong> from this site</p>
                </div>
            </div>
            <div class="grow"></div>
            <div class="text-lg text-slate-100 text-serif items-end text-right">
                <p>Site Managed by Hack13</p>
                <p class="text-sm">Hosted on Cloudflare Pages</p>
                <p class="text-sm">Video Hosting on Bunny.net</p>
                <p class="text-sm">Styled with TailwindCSS</p>
                <p class="text-sm">Created with ReactJS</p>
            </div>
        </div>
    )
}

export default Footer
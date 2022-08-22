import Head from "next/head"

const Credits = () => {
    return (
        <div className="bg-stone-100 flex flex-col rounded-md outline-3 p-4 space-y-3">
            <Head>
                <title>Neos Clocktower Fans - Credits</title>
                <meta property="og:title" content="Neos Clocktower Fans" key="titles"/>
            </Head>
            <div className="font-serif text-2xl text-stone-600">Credits</div>
            <div className="space-y-2 text-base text-stone-600 text-serif">
                <p><strong>Notice:</strong> This site isn&apos;t managed by anyone a part of any of the groups listed below, and is solely a fan project as I love and enjoy the game deeply as do others... I just wanted to provide
                a place where people of the community could find and rediscover past games and even use them to improve their skills for future games.</p>
                <p className="text-lg font-bold">Blood on the Clocktower</p>
                <p className="text-base">The base game we are all playing, which all the assets for roles and characters on this site are from the official website&apos;s wiki. We highly encourage you to go and purchase a copy of
                the official game.  You can find out more about this game from the official website here:&nbsp;
                <a href="https://bloodontheclocktower.com/" rel="noreferrer" target="_blank" className="underline">https://bloodontheclocktower.com/</a></p>
                <p className="text-lg font-bold">NeosVR</p>
                <p className="text-base">The place we this website&apos;s content originates from is the wonderful VR Platform called NeosVR. All the content you see in screenshots and videos are on this site contain avatars, 
                assets, and other content that are Intelectual Property of their respective owners. If you would like to join and check out the wonderful VR Platform we are playing on, check out the official 
                website here: <a href="https://neosvr.com/" rel="noreferrer" target="_blank" className="underline">https://neosvr.com/</a></p>
                <p className="text-lg font-bold">Raven&apos;s Wood Bluff (NeosVR World)</p>
                <p className="text-base">The game&apos;s world is created by the content creation group in NeosVR known as <strong>Abnormally Rendered</strong></p>
                <p className="text-lg font-bold">Contributers</p>
                <p className="text-base">Finally a huge thank you to everyone who helps contribute to the site by submitting your videos, helping with the code, or even just watching the videos and helping me get the game 
                data into the scripts JSON files that help me make the site functional and informative. This project is nothing without all of you. You can contribute here:&nbsp;
                <a href="https://github.com/hack13/neos-boct-scripts" rel="noreferrer" target="_blank" className="underline">https://github.com/hack13/neos-boct-scripts</a></p>
            </div>
        </div>
    )
}

export default Credits
import Head from 'next/head'
import VideoPlayer from '../../components/VideoPlayer'
import StoryTeller from '../../components/StoryTeller'
import ScriptRenderer from '../../components/ScriptRenderer'
import Roster from '../../components/Roster'
import Notes from '../../components/Notes'

export async function getStaticPaths() {
    const resp = await fetch('https://api.neosclocktower.fans/games')
    const games = await resp.json()
    return {
        paths: games.map((games: {slug: any}) => ({
            params: { slug: games.slug.toString() },
        })),
        fallback: true,
    }
}

export async function getStaticProps({ params }: any) {
    const resp = await fetch(`https://api.neosclocktower.fans/game/${params.slug}`)
    return {
        props: {
            game: await resp.json(),
        },
    }
}

/*export async function getServerSideProps({ params }: any) {
    const resp = await fetch(`https://api.neosclocktower.fans/game/${params.slug}`)
    return {
        props: {
            game: await resp.json(),
        }
    }
}*/

function changePlayer(type: string, source: string) {
    //setPlayer(type)
    //setVidsrc(source)
}

export default function Game({game}: any) {
    return (
        <div className="bg-stone-100 flex flex-col rounded-md outline-3 p-4 space-y-4">
            <Head>
                <title>{game["game name"]} - {game.date}</title>
                <meta property='og:title' content="Neos Clocktower Fans" key="titles"/>
            </Head>
            <div className="font-serif text-2xl text-stone-600">{game["game name"]}</div>
                <VideoPlayer platform={game["video sources"][0].platform} source={game["video sources"][0].source} />
            <div className="space-y-2 text-stone-600 text-serif">
                <p className="text-xl font-bold">Video Sources</p>
                <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {game["video sources"].map((video: { id: number; platform: string; source: string; perspective: string; credit: string }) =>
                        <button key={video.id} onClick={() => changePlayer(video.platform, video.source)} className="bg-slate-700 text-stone-200 rounded-md p-3"><strong>{video.platform}</strong> <br/> <strong>Perspective:</strong> {video.perspective} <br/> <strong>Credit:</strong> {video.credit}</button>
                    )}
                </div> 
                <p className="text-xl font-bold">Story Tellers</p>
                <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {game.roster.storytellers.map((storyteller: { name: string; pfp: string }) =>
                        <StoryTeller key={storyteller.name} name={storyteller.name} pfp={storyteller.pfp} />
                    )}
                </div>
                <p className="text-xl font-bold">Script</p>
                <ScriptRenderer key={game["game name"]} script={game.script} />
                <p className="text-xl font-bold">Roster</p>
                <Roster residents={game.roster.residents} />
                <p className="text-xl font-bold">Story Teller Notes</p>
                <Notes game={game.notes} />
            </div> 
        </div>
    )
}

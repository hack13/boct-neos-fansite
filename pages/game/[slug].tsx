import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from "react"
import VideoPlayer from '../../components/VideoPlayer'
import StoryTeller from '../../components/StoryTeller'
import ScriptRenderer from '../../components/ScriptRenderer'
import Roster from '../../components/Roster'
import Notes from '../../components/Notes'
import { Games } from '../../types'

const Game: NextPage<{game: Games}> = ({game}) => {
    const [player, setPlayer] = useState(game["video sources"][0].platform)
    const [vidsrc, setVidsrc] = useState(game["video sources"][0].source)
    const embedDescription = "<strong>Script:</strong> " + game.script.name + "\n <strong>Script Author:</strong> " + game.script.author

    function changePlayer(type: string, source: string) {
        setPlayer(type)
        setVidsrc(source)
    }

    return (
        <div className="bg-stone-100 flex flex-col rounded-md outline-3 p-4 space-y-4">
            <Head>
                <title>{game["game name"]} - {game.date}</title>
                <meta property='og:title' content={game["game name"]} key="title"/>
                <meta property='og:site_name' content="Neos Clocktower Fans" key="site_name"/>
                <meta property='og:description' content={embedDescription} key="description"/>
                <meta property='og:image' content={game.thumbnail} key="image"/>
                <meta name="theme-color" content="#b4aa8a"/>
                <meta name="twitter:card" content="summary_large_image" key="misc-card"/>
            </Head>
            <div className="font-serif text-2xl text-stone-600">{game["game name"]}</div>
                <VideoPlayer platform={player} source={vidsrc} />
            <div className="space-y-2 text-stone-600 text-serif">
                <p className="text-xl font-bold">Video Sources</p>
                <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {game["video sources"].map((video) =>
                        <button key={video.id} onClick={() => changePlayer(video.platform, video.source)} className="bg-slate-700 text-stone-200 rounded-md p-3"><strong>{video.platform}</strong> <br/> <strong>Perspective:</strong> {video.perspective} <br/> <strong>Credit:</strong> {video.credit}</button>
                    )}
                </div> 
                <p className="text-xl font-bold">Story Tellers</p>
                <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {game.roster.storytellers.map((storyteller) =>
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

export async function getStaticPaths() {
    const resp = await fetch('https://api.neosclocktower.fans/games')
    const games = await resp.json()
    return {
        paths: games.map((games: {slug: any}) => ({
            params: { slug: games.slug.toString().replace("/game/", "") },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const resp = await fetch(`https://api.neosclocktower.fans/game/${params.slug}`)
    return {
        props: {
            game: await resp.json(),
        },
    }
}

export default Game
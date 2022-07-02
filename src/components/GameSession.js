import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import ScriptRenderer from "./scripts/ScriptRenderer"
import StoryTeller from "./snippits/StoryTeller"
import VideoPlayer from "./snippits/VideoPlayer"

const GameSession = () => {
    let game = useParams()
    const effectRan = useRef(false)
    const [gameData, setGameData] = useState([])
    const [player, setPlayer] = useState()
    const [vidsrc, setVidsrc] = useState()
    useEffect(() => {
        if (effectRan.current === false) {
            const fetchGameData = async (gameid) => {
                await fetch(`https://api.neosclocktower.fans/game/${gameid}`)
                    .then(response => {
                    return response.json()
                })
                .then(data => {
                    setGameData(data)
                    setPlayer(data["video sources"][0].platform)
                    setVidsrc(data["video sources"][0].source)
                })
            }
            console.log('effectchecked')
            fetchGameData(game.id)
            return () => {
                effectRan.current = true
            }
        }
        
        console.log('i did something')
    }, [game.id])
    console.log(gameData)

    function changePlayer(type, source) {
        setPlayer(type)
        setVidsrc(source)
    }

    return (
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 space-y-4">
            <div class="font-serif text-2xl text-stone-600">{!effectRan.current ? 'Loading' : gameData["game name"]}</div>
                <VideoPlayer type={player} source={vidsrc} />
            <div class="space-y-2 text-stone-600 text-serif">
                <p class="text-xl font-bold">Video Sources</p>
                <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {!effectRan.current ? 'Loading' : gameData["video sources"].map(video =>
                        <button key={video.id} onClick={() => changePlayer(video.platform, video.source)} class="bg-slate-700 text-stone-200 rounded-md p-3"><strong>{video.platform}</strong> <br/> <strong>Perspective:</strong> {video.perspective} <br/> <strong>Credit:</strong> {video.credit}</button>
                    )}
                </div> 
                <p class="text-xl font-bold">Story Tellers</p>
                <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {!effectRan.current ? 'Loading' : gameData.roster.storytellers.map(storyteller =>
                        <StoryTeller key={storyteller.name} name={storyteller.name} pfp={storyteller.pfp} />
                    )}
                </div>
                <p class="text-xl font-bold">Script</p>
                {!effectRan.current ? 'Loading' : <ScriptRenderer key={gameData["game name"]} script={gameData.script} />}
            </div> 
        </div>
    )

}

export default GameSession
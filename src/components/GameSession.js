import ScriptRenderer from "./scripts/ScriptRenderer"
import StoryTeller from "./snippits/StoryTeller"
import VideoPlayer from "./snippits/VideoPlayer"
import { useState } from "react"
import { useParams } from "react-router-dom"


export default function GameSession() {
    let game = useParams()
    const gameData = require('../games/'+game.id+'.json')
    
    const [player, setPlayer] = useState(gameData["video sources"][0].platform)
    const [vidsrc, setVidsrc] = useState(gameData["video sources"][0].source)

    function changePlayer(type, source) {
        setPlayer(type)
        setVidsrc(source)
    }
    
    return (
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 space-y-4">
            <div class="font-serif text-2xl text-stone-600">{gameData["game name"]}</div>
                <VideoPlayer type={player} source={vidsrc} />
            <div class="space-y-2 text-stone-600 text-serif">
                <p class="text-xl font-bold">Video Sources</p>
                <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {gameData["video sources"].map(video =>
                        <button onClick={() => changePlayer(video.platform, video.source)} class="bg-slate-700 text-stone-200 rounded-md p-3"><strong>{video.platform}</strong> <br/> <strong>Perspective:</strong> {video.perspective} <br/> <strong>Credit:</strong> {video.credit}</button>
                    )}
                </div> 
                <p class="text-xl font-bold">Story Tellers</p>
                <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {gameData.roster.storytellers.map(storyteller =>
                        <StoryTeller name={storyteller.name} pfp={storyteller.pfp} />
                    )}
                </div>
                <p class="text-xl font-bold">Script</p>
                <ScriptRenderer script={gameData.script} />
            </div>
        </div>
    )
}
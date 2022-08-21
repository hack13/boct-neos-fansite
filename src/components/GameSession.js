import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import ScriptRenderer from "./snippits/ScriptRenderer"
import Roster from "./snippits/Roster"
import Notes from "./snippits/Notes"
import StoryTeller from "./snippits/StoryTeller"
import VideoPlayer from "./snippits/VideoPlayer"

const GameSession = () => {
    let game = useParams()
    const [player, setPlayer] = useState()
    const [vidsrc, setVidsrc] = useState()

    const fetchGameData = async () => {
        const response = await fetch(`https://api.neosclocktower.fans/game/${game.id}`)
        return response.json()
    }

    const {data, status} = useQuery("gameData", fetchGameData)

    useEffect(() => {
        if (status === "loading") {
            //skip
        }else{
            setPlayer(data["video sources"][0].platform)
            setVidsrc(data["video sources"][0].source)
        }
    },[data, status])

    function changePlayer(type, source) {
        setPlayer(type)
        setVidsrc(source)
    }

    if(status === "loading") {
        return(
            <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 space-y-4">
            Loading...
            </div> 
        )
    }

    if(status === "error") {
        return(
            <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 space-y-4">
            Error fetching from API...
            </div> 
        )
    }

    return (
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 space-y-4">
            <div class="font-serif text-2xl text-stone-600">{data["game name"]}</div>
                <VideoPlayer type={player} source={vidsrc} />
            <div class="space-y-2 text-stone-600 text-serif">
                <p class="text-xl font-bold">Video Sources</p>
                <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {data["video sources"].map(video =>
                        <button key={video.id} onClick={() => changePlayer(video.platform, video.source)} class="bg-slate-700 text-stone-200 rounded-md p-3"><strong>{video.platform}</strong> <br/> <strong>Perspective:</strong> {video.perspective} <br/> <strong>Credit:</strong> {video.credit}</button>
                    )}
                </div> 
                <p class="text-xl font-bold">Story Tellers</p>
                <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {data.roster.storytellers.map(storyteller =>
                        <StoryTeller key={storyteller.name} name={storyteller.name} pfp={storyteller.pfp} />
                    )}
                </div>
                <p class="text-xl font-bold">Script</p>
                <ScriptRenderer key={data["game name"]} script={data.script} />
                <p class="text-xl font-bold">Roster</p>
                <Roster residents={data.roster.residents} />
                <p class="text-xl font-bold">Story Teller Notes</p>
                <Notes data={data.notes} />
            </div> 
        </div>
    )


}

export default GameSession
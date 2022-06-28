import { Link } from 'react-router-dom'
import archiveList from '../datasets/archives.json'

const Archive = () => {
    return (
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4">
            <div class="font-serif text-2xl text-stone-600">Archive</div>
            <br />
            <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                {archiveList.map(game =>
                    <div class="space-x-4 p-1 flex flex-col rounded-md border-2 border-solid border-stone-500">
                        <div><Link to={game.slug}><img src={game.thumbnail} class="w-fit rounded-md" alt="video-thumbnail" /></Link></div>
                        <div class="text-serif">
                            <p class="text-2xl"><Link to={game.slug}>{game.name}</Link></p>
                            <p><strong>Date:</strong> {game.date}</p>
                            <p><strong>Script:</strong> {game.script}</p>
                            <p><strong>Story Tellers:</strong> {game.storytellers}</p>
                        </div>
                    </div>
                )}
            </div> 
        </div>
    )
}

export default Archive
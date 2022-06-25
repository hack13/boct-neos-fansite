import { Link } from 'react-router-dom'

const Archive = () => {
    return (
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4">
            <div class="font-serif text-2xl text-stone-600">Archive</div>
            <br />
            <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                <div class="space-x-4 p-1 flex flex-row rounded-md border-2 border-solid border-stone-500">
                    <div><Link to="/22-06-21"><img src="https://vz-f755a29c-81b.b-cdn.net/2ae2b03d-09de-42c0-9861-060dcf3f9814/thumbnail_8943c357.jpg" class="w-16 md:w-32 lg:w-48 rounded-md" alt="video-thumbnail" /></Link></div>
                    <div class="text-serif">
                        <p class="text-2xl"><Link to="/22-06-21">June 21, 2022</Link></p>
                        <p><strong>Script:</strong> And Make It Double</p>
                        <p><strong>Story Tellers:</strong> Delta &amp; 1AMNICK</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Archive
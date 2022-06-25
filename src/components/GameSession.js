import AndMakeItDouble from "./scripts/AndMakeItDouble"
import StoryTeller from "./snippits/StoryTeller"

const GameSession = () => {
    return (
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 space-y-4">
            <div class="font-serif text-2xl text-stone-600">And Make It Double - June 21, 2022</div>
            <div class="aspect-w-9 aspect-h-5">
                <iframe src="https://iframe.mediadelivery.net/embed/46527/2ae2b03d-09de-42c0-9861-060dcf3f9814?autoplay=false" loading="lazy" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true" title="videoplayer"></iframe>
            </div>
            <div class="space-y-2 text-stone-600 text-serif">
                <p class="text-xl font-bold">Story Tellers</p>
                <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    <StoryTeller name="Delta" pfp="https://placeholder.pics/svg/150x150" />
                    <StoryTeller name="1amNick" pfp="https://placeholder.pics/svg/150x150" />
                </div>
                <p class="text-xl font-bold">Script</p>
                <AndMakeItDouble />
            </div>
        </div>
    )
}

export default GameSession
const StoryTeller = ({ name, pfp }) => {
    return (
        <div class="flex flex-row rounded-md border-2 p-2">
            <div class="flex-none">
                <img src={pfp} alt="profilepicture" class="rounded-full w-20" />
            </div>
            <div class="flex-1">
                <p class="text-xl font-bold">{name}</p>
            </div>
        </div>
    )
}

export default StoryTeller
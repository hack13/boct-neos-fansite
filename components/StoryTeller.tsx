const StoryTeller = ({ name, pfp }: { name: string; pfp: string }) => {
    return (
        <div className="flex flex-row rounded-md border-2 p-2">
            <div className="flex-none">
                <img src={pfp} alt="profilepicture" className="rounded-full w-20" />
            </div>
            <div className="flex-1">
                <p className="text-xl font-bold">{name}</p>
            </div>
        </div>
    )
}

export default StoryTeller
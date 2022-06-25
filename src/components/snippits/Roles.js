const Roles = ({ role, team, description, fulllink }) => {
    let image = '/roles/' + team + '/' + role.split(' ').join('_') + '.png'
    return (
        <div class="flex flex-row border-2 rounded-md p-2">
            <div class="flex-none items-center">
                <img src={image} alt={role} class="w-32" />
            </div>
            <div class="flex-1">
                <p class="text-stone-500 font-bold">{role}</p>
                <p class="text-stone-500">{description}</p>
                <p class="underline text-blue-400 text-right"><a href={fulllink} rel="noreferrer" target="_blank">Learn More</a></p>
            </div>
        </div>
    )
}

export default Roles
import rolesheet from '../../datasets/roles.json'

const Roles = ({ role }) => {
    let lookup = role
    let team = rolesheet[lookup].type.replace(/"/g, "")
    let properName = rolesheet[lookup].name.replace(/"/g, "")
    let description = rolesheet[lookup].ability.replace(/"/g, "")
    
    // Build full link
    let fulllink = "https://wiki.bloodontheclocktower.com/" + properName.split(' ').join('_')
    // Build the image
    let image = '/assets/roles/' + team + '/' + properName.split(' ').join('_').replace(/'/g, "") + '.png'

    return (
        <div class="flex flex-row border-2 rounded-md p-2">
            <div class="flex-none items-center">
                <img src={image} alt={role} class="w-12 md:w-20 lg:w-32" />
            </div>
            <div class="flex-1">
                <p class="text-stone-500 font-bold">{properName}</p>
                <p class="text-stone-500">{description}</p>
                <p class="underline text-blue-400 text-right"><a href={fulllink} rel="noreferrer" target="_blank">Learn More</a></p>
            </div>
        </div>
    )
}

export default Roles
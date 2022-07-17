import rolesheet from '../../datasets/roles.json'

const Role = ({ role }) => {
    let lookup = role
    //console.log(role)
    let team = rolesheet[lookup].type.replace(/"/g, "")
    let properName = rolesheet[lookup].name.replace(/"/g, "")
    let description = rolesheet[lookup].ability.replace(/"/g, "")

    return (
        <div class="flex flex-row">
            <div class="flex-1">
                <p class="text-slate-700 font-bold">{team[0].toUpperCase() + team.substring(1)}</p>
                <p class="text-stone-500 font-bold">{properName}</p>
                <p class="text-stone-500 indent-4">{description}</p>
            </div>
        </div>
    )
}

export default Role
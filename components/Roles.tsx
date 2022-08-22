import _rolesheet from '../public/assets/roles.json'

interface RolesData {
    script_offset: number;
    name:          string;
    type:          string;
    ability:       string;
}

const rolesheet = _rolesheet as unknown as RolesData[]

const Roles = ({ role }: { role: string }) => {
    let lookup: any = role
    let team = rolesheet[lookup].type.replace(/"/g, "")
    let properName = rolesheet[lookup].name.replace(/"/g, "")
    let description = rolesheet[lookup].ability.replace(/"/g, "")
    
    // Build full link
    let fulllink = "https://wiki.bloodontheclocktower.com/" + properName.split(' ').join('_')
    // Build the image
    let image = '/assets/roles/' + team + '/' + properName.split(' ').join('_').replace(/'/g, "") + '.png'

    return (
        <div className="flex flex-row border-2 rounded-md p-2">
            <div className="flex-none items-center">
                <picture>
                    <img src={image} alt={role} className="w-12 md:w-20 lg:w-32" />
                </picture>
            </div>
            <div className="flex-1">
                <p className="text-stone-500 font-bold">{properName}</p>
                <p className="text-stone-500">{description}</p>
                <p className="underline text-blue-400 text-right"><a href={fulllink} rel="noreferrer" target="_blank">Learn More</a></p>
            </div>
        </div>
    )
}

export default Roles
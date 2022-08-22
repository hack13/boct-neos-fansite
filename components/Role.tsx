import _rolesheet from '../public/assets/roles.json'

interface RolesData {
    script_offset: number;
    name:          string;
    type:          string;
    ability:       string;
}

const rolesheet = _rolesheet as unknown as RolesData[]

const Role = ({ role }: { role: any }) => {
    let lookup = role
    let team = rolesheet[lookup].type.replace(/"/g, "")
    let properName = rolesheet[lookup].name.replace(/"/g, "")

    return (
        <div className="flex flex-row">
            <div className="flex-1">
                <p className="text-slate-700 font-bold">{team[0].toUpperCase() + team.substring(1)}</p>
                <p className="text-slate-700 font-bold">{properName}</p>
            </div>
        </div>
    )
}

export default Role
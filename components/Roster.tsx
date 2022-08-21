import { Key, ReactElement, JSXElementConstructor, ReactFragment } from 'react'
import Role from './Role'

const Roster = ({ residents }: { residents: any }) => {
    
    const rosterData = residents.map((resident: { name: string; isDead: boolean; role: string }) => (
        <div key={resident.name} className="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
            <p className="text-xl">{resident.name}</p>
            <div className="indent-2">
                { (resident.isDead) ? <p className="font-bold text-red-800">Died</p> : <p className="font-bold text-sky-700">Survived</p> }
                <Role role={resident.role} />
            </div>
        </div>
    ))

    return(
        <div className="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
            {rosterData.length === 0 ? 'No Roster Data Available' : rosterData}
            </div>
        </div>
    )
}

export default Roster
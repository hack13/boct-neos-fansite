import Role from './Role'

const Roster = ({ residents }) => {
    
    const rosterData = residents.map(resident => (
        <div key={resident.name} class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
            <p className="text-xl">{resident.name}</p>
            <div className="indent-2">
                { (resident.isDead) ? <p className="font-bold text-red-800">Died</p> : <p className="font-bold text-sky-700">Survived</p> }
                <Role role={resident.role} />
            </div>
        </div>
    ))

    return(
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
            {rosterData.length === 0 ? 'No Roster Data Available' : rosterData}
        </div>
    )
}

export default Roster
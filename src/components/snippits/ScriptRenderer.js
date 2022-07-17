import Roles from './Roles'
import DataSheet from '../../datasets/roles.json'

const ScriptRenderer = ({ script }) => {

    function roleFilter(role,filter){
        if (role !== DataSheet[role]){
            let roledata = DataSheet[role].type
            if (roledata === filter){
                return(
                    <Roles key={role} role={role} />
                )
            }
        }
    }

    return (
        <div key={script.name} class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
            <div class="font-serif text-lg font-bold text-stone-600">{script.name}</div>
            <p class="font-serif text-base text-stone-600 italic"><strong>Author:</strong> {script.author}</p>
            <br />
            <div class="flex flex-col">
                <div>
                    <p class="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Townsfolk</p>
                    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        {script.roles.map(townsfolk => 
                            roleFilter(townsfolk.id, 'townsfolk')   
                        )}
                    </div>
                </div>
                <div>
                    <p class="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Outsiders</p>
                    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        {script.roles.map(townsfolk => 
                            roleFilter(townsfolk.id, 'outsider')   
                        )}
                    </div>
                </div>
                <div>
                    <p class="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Minions</p>
                    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        {script.roles.map(townsfolk => 
                            roleFilter(townsfolk.id, 'minion')   
                        )}
                    </div>
                </div>
                <div>
                    <p class="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Demons</p>
                    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        {script.roles.map(townsfolk => 
                            roleFilter(townsfolk.id, 'demon')   
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScriptRenderer
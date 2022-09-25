import Roles from './Roles'
import _rolesheet from '../public/assets/roles.json'

interface Roles {
    script_offset: number;
    name:          string;
    type:          string;
    ability:       string;
}

const DataSheet = _rolesheet as unknown as Roles[]

const ScriptRenderer = ({ script }: { script: any }) => {
    function roleFilter(role: any, filter: string){
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
        <div key={script.name} className="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
            <div className="font-serif text-lg font-bold text-stone-600">{script.name}</div>
            <p className="font-serif text-base text-stone-600 italic"><strong>Author:</strong> {script.author}</p>
            <br />
            <div className="flex flex-col">
                <div>
                    <p className="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Townsfolk</p>
                    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        {script.roles.map((townsfolk: { id: string }) => 
                            roleFilter(townsfolk.id, 'townsfolk')   
                        )}
                    </div>
                </div>
                <div>
                    <p className="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Outsiders</p>
                    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        {script.roles.map((townsfolk: { id: string }) => 
                            roleFilter(townsfolk.id, 'outsider')   
                        )}
                    </div>
                </div>
                <div>
                    <p className="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Minions</p>
                    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        {script.roles.map((townsfolk: { id: string }) => 
                            roleFilter(townsfolk.id, 'minion')   
                        )}
                    </div>
                </div>
                <div>
                    <p className="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Demons</p>
                    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        {script.roles.map((townsfolk: { id: string }) => 
                            roleFilter(townsfolk.id, 'demon')   
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScriptRenderer

import Roles from '../snippits/Roles'

const AndMakeItDouble = () => {
    return (
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
            <div class="font-serif text-lg font-bold text-stone-600">And Make It Double</div>
            <br />
            <div class="flex flex-col">
                <div>
                    <p class="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Townsfolk</p>
                    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        <Roles role="Chef" team="townsfolk" description="You start knowing how many pairs of evil players there are." />
                        <Roles role="Empath" team="townsfolk" description="Each night, you learn how many of your 2 alive neighbors are evil." />
                        <Roles role="Fortune Teller" team="townsfolk" description="Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you." />
                        <Roles role="Investigator" team="townsfolk" description="You start knowing that 1 of 2 players is a particular Minion." />
                        <Roles role="Librarian" team="townsfolk" description="You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)" />
                        <Roles role="Monk" team="townsfolk" description="Each night*, choose a player (not yourself): they are safe from the Demon tonight." />
                        <Roles role="Ravenkeeper" team="townsfolk" description="If you die at night, you are woken to choose a player: you learn their character." />
                        <Roles role="Slayer" team="townsfolk" description="Once per game, during the day, publicly choose a player: if they are the Demon, they die." />
                        <Roles role="Soldier" team="townsfolk" description="You are safe from the Demon." />
                        <Roles role="Undertaker" team="townsfolk" description="Each night*, you learn which character died by execution today." />
                        <Roles role="Washerwoman" team="townsfolk" description="You start knowing that I of 2 players is a particular Townsfolk." />
                        <Roles role="Chambermaid" team="townsfolk" description="Each night, choose 2 alive players (not yoursel): you leam how many woke tonight due to their ability." />
                    </div>
                </div>
                <div>
                    <p class="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Outsiders</p>
                    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        <Roles role="Drunk" team="outsiders" description="You do not know you are the Drunk. You think you are a Townsfolk character, but you are not." />
                        <Roles role="Recluse" team="outsiders" description="You might register as evil &amp; as a Minion or Demon, even if dead." />
                        <Roles role="Tinker" team="outsiders" description="You might die at any time." />
                        <Roles role="Mutant" team="outsiders" description="If you are 'mad' about being an Outsider, you might be executed." />
                    </div>
                </div>
                <div>
                    <p class="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Minions</p>
                    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        <Roles role="Baron" team="minions" description="There are extra Outsiders in play. [+2 Outsiders]" />
                        <Roles role="Poisoner" team="minions" description="Each night, choose a player: they are poisoned tonight and tomorrow day." />
                        <Roles role="Spy" team="minions" description="Each night, you see the Grimoire. You might register as good &amp; as a Townsfolk or Outsider, even if dead." />
                        <Roles role="Evil Twin" team="minions" description="You &amp; an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live." />
                    </div>
                </div>
                <div>
                    <p class="bg-stone-400 text-slate-50 font-bold rounded-md w-fit p-2">Demons</p>
                    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                        <Roles role="Imp" team="demons" description="Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp." />
                        <Roles role="LilMonsta" team="demons" description="Each night, Minions choose who babysits Lil Monsta's token &amp; 'is the Demon'. A player dies each night*. [+1 Minion]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AndMakeItDouble
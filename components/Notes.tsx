const Notes = ({ game }: any) => {
    if (!game){
        return (
        <div className="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
            <div className="font-serif">
                No Notes Available
            </div>
        </div> 
        )
    }else{
        return(
            <div className="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
                <div className="font-serif">
                {game.split('\n').map((line: string, i: number) => (
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                ))}
                </div>
            </div>
        )

    }
    
}

export default Notes
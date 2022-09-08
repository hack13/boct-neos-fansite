import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";
import reactMarkdown from "react-markdown";

const Notes = ({ game }: any) => {
    if (game.length === 0){
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
                {game.split('\n').map((line: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, i: Key | null | undefined) => (
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
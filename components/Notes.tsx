const Notes = ({ data }: any) => {
    return (
        <div className="bg-stone-100 flex flex-col rounded-md outline-3 p-4 border-2">
            <textarea className="block bg-stone-50 w-full border border-slate-300 rounded-md shadow-sm" readOnly defaultValue={!data ? 'No Notes Available' : data}>
                
            </textarea>
        </div> 
    )
}

export default Notes
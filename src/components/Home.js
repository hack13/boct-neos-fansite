const Home = () => {
    return (
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4">
            <div class="px-12 py-2">
                <img src="/assets/front-page.webp" class="rounded-md" alt="front-page-game"/>
                <p class="text-sm italic text-stone-500">Image Credit: Raith</p>
            </div>
            <br />
            <div class="font-serif text-2xl text-stone-600">Neos Clocktower Fans</div>
            <div class="space-y-2 text-base text-stone-600 text-serif">
                <p class="text-base text-stone-600 text-serif">
                    Welcome to Neos Clocktower Fans Site! This site contains the archive of previously played games of Blood on the Clocktower inside of wonderful platform known as 
                    NeosVR. This project is a personal project that was born out of the want to teach myself JavaScript and want to contribute to a community I enjoy being a part of. 
                    I however need help to make this the best we can. This site works off of data collected by fans who played, storytellers, and those who watch to help me record the 
                    data into a database. If you would like to help contribute, you can do so here: <a href="https://github.com/hack13/neos-boct-scripts" rel="noreferrer" target="_blank" class="underline">https://github.com/hack13/neos-boct-scripts</a>
                </p>
                <p class="text-base text-stone-600 text-serif">
                    Please note, that this site is still in early development, and I am still making tons of changes to get it working properly for everyone. Please let me know 
                    if you have any recomendations or changes I should make. Again, this is just a big fan site for an amazing game, and record keeping of all the games we play. 
                    Nothing on this site is endorsed, sponsored, nor am I a part of NeosVR team that built this (Abnormally Rendered), nor the official Blood on the Clocktower itself.
                </p>               
            </div>
        </div>
    )
}

export default Home
const About = () => {
    return (
        <div class="bg-stone-100 flex flex-col rounded-md outline-3 p-4">
            <div class="font-serif text-2xl text-stone-600">About</div>
            <br />
            <div class="space-y-2 text-base text-stone-600 text-serif">
                <p>This site is created by Hack13, to help collect and create an archive of the games of Blood on the Clocktower inside of
                    NeosVR. The contents of the site are a collection of recordings, documentation, notes, and official game information 
                    from Blood on the Clocktower.</p>
                <p>I collect information from each game, compile it into a JSON document, and load it into a database so that this site can 
                    query and use the information for rendering the pages and video of each game. If you would like to contribute to the data 
                    please feel to reach out to Hack13.</p>
                <p>Finally in closing, if you enjoy this collection of content and the game. Be sure to go buy a copy of Blood on the Clocktower 
                    or let people know about this wonderful game and check out the credits page.</p>
            </div>
        </div>
    )
}

export default About
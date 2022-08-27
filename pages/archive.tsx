import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { GameList } from '../Types'

const Archive: NextPage<{ games: GameList[] }> = ({games}) => {
    return (
        <div className="bg-stone-100 flex flex-col rounded-md outline-3 p-4">
            <Head>
                <title>Neos Clocktower Fans - Achrive</title>
                <meta property='og:title' content="Neos Clocktower Fans" key="titles"/>
            </Head>
            <div className="font-serif text-2xl text-stone-600">Archive</div>
            <br />
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                {games.map((game) => 
                    <div key={game.id} className="space-x-4 p-1 flex flex-col rounded-md border-2 border-solid border-stone-500">
                        <div><Link href={game.slug}><picture><img src={game.thumbnail} className="w-fit rounded-md" alt="video-thumbnail" /></picture></Link></div>
                        <div className="text-serif">
                            <p className="text-2xl"><Link href={game.slug}>{game.name}</Link></p>
                            <p><strong>Date:</strong> {game.date}</p>
                            <p><strong>Script:</strong> {game.script}</p>
                            <p><strong>Story Tellers:</strong> {game.storytellers}</p>
                        </div>
                    </div>
                )}
            </div> 
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const resp = await fetch('https://api.neosclocktower.fans/games')
    return {
        props : {
            games: await resp.json(),
        }
    }
}

export default Archive
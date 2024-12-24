import { VideoGame } from "../models/videoGame"
import GameItem from "./gameItem"

interface props {
    games: VideoGame[]
}
const videoGameGrid = ({ games }: props) => {
    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-white font-bold mb-6">Feature Games</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {games.map((games) => (

                        <GameItem key={games.id} {...games}  />

                    ))}
                     
                    
                </div>
            </div>
        </div>
    )

    
}

export default videoGameGrid
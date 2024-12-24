

import './App.css'
import { VideoGame } from './models/videoGame';
import VideoGameGrid from './videoGames/videoGameGrid';

function App() {
  const games : VideoGame[] = [
    {
      id : 1,
      title: "The Last Guardian",
      subtitle: "Action-Adventure",
      description: "An extraordinary journey through an ethereal world where a young boy and his gigantic companion solve mysteries and overcome challenges together.",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f"
    },
    {
      id : 2,
      title: "Cyber Nexus",
      subtitle: "Sci-Fi RPG",
      description: "Dive into a futuristic metropolis where choices matter and cybernetic augmentations unlock new possibilities in this immersive RPG.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
    },
    {
      id : 3,
      title: "Forest Chronicles",
      subtitle: "Open World",
      description: "Explore a vast mystical forest filled with ancient secrets, magical creatures, and challenging puzzles in this breathtaking adventure.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420"
    },
    {
      id : 4,
      title: "Speed Warriors",
      subtitle: "Racing",
      description: "Experience high-octane racing action with futuristic vehicles and stunning tracks set across various exotic locations.",
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e"
    }
  ];
 
  return (
    <>

    <VideoGameGrid games={games} />
      
    </>
  )
}

export default App

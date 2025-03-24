const Projects = () => {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        
        {/* Flappy Bird Game */}
        <div className="bg-gray-700  p-6 rounded-lg shadow-lg">
          <a href="https://github.com/benPozin/FlappyBird" target="_blank" className="inline-block mt-3">
          <img src="/flappybird.png" alt="Flappy Bird Clone" className="w-fill h-52 object-cover rounded-md mb-4 hover:opacity-50 transition duration-300"/>
          </a>
          <h3 className="text-2xl font-semibold">Flappy Bird Game</h3>
          <p className="mt-2 text-gray-300">
            A Java game inspired by Flappy Bird. Implemented physics & collision detection.
          </p>
        </div>

        {/* Pong Game */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <a href="https://github.com/benPozin/Pong" target="_blank" className="inline-block mt-4 hover:opacity-50 transition duration-300">
          <img src="/pong.png" alt="Pong Game" className="w-fill h-48 object-cover rounded-md mb-4 hover:bg-blue-500" />
          </a>
          <h3 className="text-2xl font-semibold">Pong Game</h3>
          <p className="mt-2 text-gray-300">
            A two-player Pong game built using Pygame.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Projects;

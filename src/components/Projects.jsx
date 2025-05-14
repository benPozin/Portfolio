import { motion } from 'framer-motion';

const projectData = [
  {
    title: "Flappy Bird Game",
    description: "A Java game inspired by Flappy Bird. Implemented physics & collision detection.",
    img: "/flappybird.png",
    link: "https://github.com/benPozin/FlappyBird",
    direction: -80, // slide from left
  },
  {
    title: "Pong Game",
    description: "A two-player Pong game built using Pygame.",
    img: "/pong.png",
    link: "https://github.com/benPozin/Pong",
    direction: -80, // slide from right
  },
  {
    title: "JSON Builder",
    description: "Tool to visually build JSON configs for data matching.",
    img: "/json.png",
    link: "https://github.com/benPozin/json-builder",
    direction: -80, // alternate back
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="flex justify-center gap-6 px-4 flex-wrap lg:flex-nowrap">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-700 bg-opacity-70 p-4 rounded-lg shadow-lg w-72 flex-shrink-0"
            initial={{ opacity: 0, x: project.direction }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4 hover:opacity-50 transition duration-300"
              />
            </a>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

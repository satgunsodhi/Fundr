import { Link } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';

const HomePage = () => {
  const { projects } = useProjects();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={project.photoLink}
              alt={project.companyName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.companyName}</h2>
              {project.productName && (
                <p className="text-gray-600 mb-2">{project.productName}</p>
              )}
              <p className="text-gray-700 line-clamp-2 mb-4">{project.description}</p>
              <div className="space-y-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{
                      width: `${Math.min(
                        (project.currentAmount / project.goal) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹{project.currentAmount.toLocaleString()}</span>
                  <span>₹{project.goal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
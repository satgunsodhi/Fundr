import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';
import { Calendar, Clock, Target } from 'lucide-react';

const DisplayPage = () => {
  const { id } = useParams();
  const { projects, investInProject } = useProjects();
  const [investmentAmount, setInvestmentAmount] = useState('');
  
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const progress = (project.currentAmount / project.goal) * 100;

  const handleInvest = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = Number(investmentAmount);
    if (amount > 0) {
      investInProject(project.id, amount);
      setInvestmentAmount('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <img
        src={project.photoLink}
        alt={project.companyName}
        className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{project.companyName}</h1>
            {project.productName && (
              <h2 className="text-xl text-gray-600 mb-4">{project.productName}</h2>
            )}
            <p className="text-gray-700">{project.description}</p>
          </div>

          {(project.timeline || project.deadline || project.rewards) && (
            <div className="space-y-4">
              {project.timeline && (
                <div className="flex items-start space-x-2">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Timeline</h3>
                    <p className="text-gray-600">{project.timeline}</p>
                  </div>
                </div>
              )}

              {project.deadline && (
                <div className="flex items-start space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Deadline</h3>
                    <p className="text-gray-600">{new Date(project.deadline).toLocaleDateString()}</p>
                  </div>
                </div>
              )}

              {project.rewards && (
                <div className="flex items-start space-x-2">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Rewards</h3>
                    <p className="text-gray-600">{project.rewards}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
          <div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹{project.currentAmount.toLocaleString()}</span>
              <span>₹{project.goal.toLocaleString()}</span>
            </div>
            <p className="text-center text-gray-600 mt-2">
              {progress.toFixed(1)}% of goal reached
            </p>
          </div>

          <form onSubmit={handleInvest} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investment Amount (₹)
              </label>
              <input
                type="number"
                min="1"
                required
                placeholder="Enter amount"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Invest Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
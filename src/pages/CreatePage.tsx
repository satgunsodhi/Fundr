import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';

const CreatePage = () => {
  const navigate = useNavigate();
  const { addProject } = useProjects();
  const [formData, setFormData] = useState({
    companyName: '',
    productName: '',
    description: '',
    timeline: '',
    deadline: '',
    rewards: '',
    goal: '',
    photoLink: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: Date.now().toString(),
      ...formData,
      goal: Number(formData.goal),
      currentAmount: 0,
    };
    addProject(newProject);
    navigate(`/project/${newProject.id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Create New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name *
            <input
              type="text"
              name="companyName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Name
            <input
              type="text"
              name="productName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.productName}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description *
            <textarea
              name="description"
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Timeline
            <input
              type="text"
              name="timeline"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.timeline}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Deadline
            <input
              type="date"
              name="deadline"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.deadline}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rewards
            <textarea
              name="rewards"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.rewards}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Goal Amount (₹) *
            <input
              type="number"
              name="goal"
              required
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.goal}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo Link *
            <input
              type="url"
              name="photoLink"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.photoLink}
              onChange={handleChange}
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
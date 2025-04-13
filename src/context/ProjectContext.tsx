import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Project } from '../types';

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  investInProject: (id: string, amount: number) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const investInProject = (id: string, amount: number) => {
    setProjects(projects.map(project =>
      project.id === id
        ? { ...project, currentAmount: project.currentAmount + amount }
        : project
    ));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, investInProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};
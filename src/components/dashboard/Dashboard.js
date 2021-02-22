import React from 'react';
import ProjectList from '../projects/ProjectList';
import AddButton from './AddButton';

const Dashboard = () => {
  return (
    <div>
      <ProjectList />
      <AddButton />
    </div>
  );
};

export default Dashboard;

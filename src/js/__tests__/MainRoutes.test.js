import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import MainRoutes from '../components/layout/MainRoutes';
import HomePage from '../components/pages/HomePage';
import TaskPage from '../components/pages/TaskPage';
import ReportPage from '../components/pages/ReportPage';

jest.mock('../components/pages/HomePage', () => {
  const HomePage = () => <div />;
  return HomePage;
});

jest.mock('../components/pages/TaskPage', () => {
  const TaskPage = () => <div />;
  return TaskPage;
});

jest.mock('../components/pages/ReportPage', () => {
  const ReportPage = () => <div />;
  return ReportPage;
});

describe('Main routes', () => {
  const setupRoutes = path =>
    mount(
      <MemoryRouter initialEntries={[path]}>
        <MainRoutes />
      </MemoryRouter>
    );

  it('should display home page as landing page', () => {
    const wrapper = setupRoutes('/');
    expect(wrapper.find(HomePage)).toHaveLength(1);
    expect(wrapper.find(TaskPage)).toHaveLength(0);
    expect(wrapper.find(ReportPage)).toHaveLength(0);
  });

  it("should display task page when navigate to '/task'", () => {
    const wrapper = setupRoutes('/task');
    expect(wrapper.find(HomePage)).toHaveLength(0);
    expect(wrapper.find(TaskPage)).toHaveLength(1);
    expect(wrapper.find(ReportPage)).toHaveLength(0);
  });

  it("should display report page when navigate to '/report'", () => {
    const wrapper = setupRoutes('/report');
    expect(wrapper.find(HomePage)).toHaveLength(0);
    expect(wrapper.find(TaskPage)).toHaveLength(0);
    expect(wrapper.find(ReportPage)).toHaveLength(1);
  });
});

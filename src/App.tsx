import React from 'react'
import { Tabs } from 'antd'
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';

const { TabPane } = Tabs;

const App: React.FC = () => {
  return (
    <div className='app'>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Task1" key="1">
          <Task1 />
        </TabPane>
        <TabPane tab="Task2" key="2">
          <Task2 />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default App


import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from './components/Tabs';

function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>React Tabs</h1>
      <Tabs defaultTab={0}>
        <TabList>
          <Tab index={0}>Profile</Tab>
          <Tab index={1}>Settings</Tab>
          <Tab index={2}>Messages</Tab>
        </TabList>

        <TabPanel index={0}>
          <h3>Profile Content</h3>
          <p>This is where your profile information would go.</p>
        </TabPanel>
        <TabPanel index={1}>
          <h3>Settings Content</h3>
          <p>Configure your application settings here.</p>
        </TabPanel>
        <TabPanel index={2}>
          <h3>Messages Content</h3>
          <p>View your messages and notifications here.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;

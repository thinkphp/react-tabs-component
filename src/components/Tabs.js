import React, { useState } from 'react';

const TabContext = React.createContext(null);

const Tabs = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs-container" style={{ width: '100%' }}>
        {children}
      </div>
    </TabContext.Provider>
  );
};

const TabList = ({ children }) => {
  return (
    <div 
      className="tab-list"
      style={{
        display: 'flex',
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '1rem'
      }}
    >
      {children}
    </div>
  );
};

const Tab = ({ children, index }) => {
  const { activeTab, setActiveTab } = React.useContext(TabContext);
  const isActive = activeTab === index;

  return (
    <button
      onClick={() => setActiveTab(index)}
      style={{
        padding: '0.75rem 1rem',
        border: 'none',
        background: 'none',
        borderBottom: isActive ? '2px solid #3b82f6' : '2px solid transparent',
        color: isActive ? '#3b82f6' : '#64748b',
        cursor: 'pointer',
        transition: 'all 0.2s',
        fontWeight: isActive ? '600' : '400',
        outline: 'none'
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.target.style.color = '#4b5563';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.target.style.color = '#64748b';
        }
      }}
    >
      {children}
    </button>
  );
};

const TabPanel = ({ children, index }) => {
  const { activeTab } = React.useContext(TabContext);

  if (activeTab !== index) return null;

  return (
    <div className="tab-panel" style={{ padding: '1rem 0' }}>
      {children}
    </div>
  );
};

export { Tabs, TabList, Tab, TabPanel };

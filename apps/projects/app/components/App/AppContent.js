import React from 'react'

import { TabbedView, TabBar, TabContent, Tab } from '../TabbedView'
import { Issues, Overview, Settings } from '../Content'

// TODO: improve structure:
/*
  contentData = [
    {
      title, // merge with screen -> add name to the components
      screen,
      button: { title, actions: [] },
      panel: { content, title },
      empty: { title, text, icon, button: { action, title } }
    }
  ]
*/

// TODO: Dynamic component loading

const AppContent = () => {
  return (
    <TabbedView>
      <TabBar>
        <Tab>Overview</Tab>
        <Tab>Issues</Tab>
        <Tab>Settings</Tab>
      </TabBar>
      <TabContent>
        <Overview />
        <Issues />
        <Settings />
      </TabContent>
    </TabbedView>
  )
}

export default AppContent

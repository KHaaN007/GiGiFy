import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CategoryTabs = () => {


    const [tabIndex, setTabIndex] = useState(0);


    return (
        <div className='container mx-auto'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>
                <TabPanel>One</TabPanel>
                <TabPanel>Two</TabPanel>
                <TabPanel>Three</TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTabs;
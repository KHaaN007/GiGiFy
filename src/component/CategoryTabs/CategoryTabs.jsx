import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJobs from '../../Hooks/useJobs/useJobs';
import WebCard from '../CategoryCard/webCard/WebCard';
import DesignCard from '../CategoryCard/DesignCard/DesignCard';
import MarketingCard from '../CategoryCard/MarketingCard/MarketingCard';




const CategoryTabs = () => {
    const { data } = useJobs()


    /**Filter Web Development Jobs**/
    const filterWebjob = data?.filter(job => job?.jobTitle === 'Web Development')


    /**Filter Digital Marketing Jobs**/
    const filterMarketingjob = data?.filter(job => job?.jobTitle === 'Digital Marketing')


    /**Filter Graphic Design Jobs**/
    const filterDesignjob = data?.filter(job => job?.jobTitle === 'Graphic Design')


    return (
        <div className='w-2/5 mx-auto'>

            <Tabs>
                <TabList>
                    <Tab><span className='text-xl'>Web Development</span></Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphic Design</Tab>
                </TabList>


                {/* Web Development Jobs */}
                <TabPanel>
                    {
                        filterWebjob && filterWebjob?.map((webJob) => (<WebCard key={webJob._id}
                            webJob={webJob}
                        ></WebCard>))
                    }
                </TabPanel>



                {/* Digital Marketing Jobs */}
                <TabPanel>
                    {
                        filterMarketingjob && filterMarketingjob?.map((marketingJob) => (<MarketingCard
                            marketingJob={marketingJob}
                            key={marketingJob._id}>
                        </MarketingCard>))
                    }
                </TabPanel>


                {/* Graphic Design Jobs */}
                <TabPanel>
                    {
                        filterDesignjob && filterDesignjob?.map((designJob) => (<DesignCard
                            designJob={designJob}
                            key={designJob._id}>

                        </DesignCard>))
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default CategoryTabs;
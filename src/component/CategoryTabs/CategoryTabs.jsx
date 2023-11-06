import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJobs from '../../Hooks/useJobs/useJobs';
import WebCard from '../CategoryCard/webCard/WebCard';
import DesignCard from '../CategoryCard/DesignCard/DesignCard';
import MarketingCard from '../CategoryCard/MarketingCard/MarketingCard';
import Loading from '../../RowCssComponent/Loading/Loading';




const CategoryTabs = () => {
    const { data, isLoading } = useJobs()


    if(isLoading){
        return <Loading></Loading>
    }

    /**Filter Web Development Jobs**/
    const filterWebjob = data?.filter(job => job?.jobTitle === 'Web Development')


    /**Filter Digital Marketing Jobs**/
    const filterMarketingjob = data?.filter(job => job?.jobTitle === 'Digital Marketing')


    /**Filter Graphic Design Jobs**/
    const filterDesignjob = data?.filter(job => job?.jobTitle === 'Graphic Design')


    return (
        <div className='lg:w-3/5 w-10/12 mx-auto my-32'>
            <div className='text-center '>
                <h2 className='lg:text-6xl font-semibold text-indigo-500'>Find Your <span className='lg:text-7xl font-mono'>Dream</span> Job</h2>
            </div>

            <Tabs>
                <TabList className='lg:space-x-56 py-24'>
                    <Tab><span className='text-2xl font-semibold font-mono'>Web Development</span></Tab>
                    <Tab><span className='text-2xl font-semibold font-mono'>Digital Marketing</span></Tab>
                    <Tab><span className='text-2xl font-semibold font-mono'>Graphic Design</span></Tab>
                </TabList>


                {/* Web Development Jobs */}
                <TabPanel>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">

                        {
                            filterWebjob && filterWebjob?.map((webJob) => (<WebCard key={webJob._id}
                                webJob={webJob}
                            ></WebCard>))
                        }
                    </div>
                </TabPanel>



                {/* Digital Marketing Jobs */}
                <TabPanel>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">

                        {
                            filterMarketingjob && filterMarketingjob?.map((marketingJob) => (<MarketingCard
                                marketingJob={marketingJob}
                                key={marketingJob._id}>
                            </MarketingCard>))
                        }
                    </div>
                </TabPanel>


                {/* Graphic Design Jobs */}
                <TabPanel>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">

                        {
                            filterDesignjob && filterDesignjob?.map((designJob) => (<DesignCard
                                designJob={designJob}
                                key={designJob._id}>

                            </DesignCard>))
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default CategoryTabs;
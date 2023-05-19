
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    return (
        <div className='text-center my-32'>
            <Tabs>
                <TabList className='bg-orange-600 font-bold text-3xl'>
                    <Tab>Lego Cars</Tab>
                    <Tab>Lego City</Tab>
                    <Tab>Lego Star Wars</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content x</h2>
                    <h2>Any Content y</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 1</h2>
                    <h2>Any Content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content j</h2>
                    <h2>Any Content u</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;
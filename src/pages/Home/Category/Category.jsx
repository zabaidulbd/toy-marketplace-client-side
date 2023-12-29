import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import CategoryLegoCity from './CategoryLegoCity';
import CategoryLegoCars from './CategoryLegoCars';
import CategoryLegoCarWar from './CategoryLegoCarWar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {

    const [legoCity, setLegoCity] = useState([]);
    const [legoCars, setLegoCars] = useState([]);
    const [legoCarWar, setLegoCarWar] = useState([]);

    useEffect(() => {

        fetch(`https://assignment-eleven-server-lovat.vercel.app/toy/lego-city`)
            .then(res => res.json())
            .then(data => {
                setLegoCity(data)
            })

    }, []);

    useEffect(() => {

        fetch(`https://assignment-eleven-server-lovat.vercel.app/toy/lego-cars`)
            .then(res => res.json())
            .then(data => {
                setLegoCars(data)
            })
    }, []);


    useEffect(() => {

        fetch(`https://assignment-eleven-server-lovat.vercel.app/toy/lego-star-wars`)
            .then(res => res.json())
            .then(data => {
                setLegoCarWar(data)
            })
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);




    return (
        <div className='mt-20 mb-16'>
            <div className='text-center'>
                <h1 data-aos="fade-up" className='text-5xl font-bold underline mb-3'>Search By Category</h1>
                <h3 data-aos="fade-down" className="text-lg text-gray-700 mb-10">Explore our collection of popular toys and Search by your favorite Category</h3>
            </div>

            <Tabs>
                <TabList className="text-center bg-gray-200 font-bold test-5xl px-5 pt-8">
                    <Tab>Lego-City</Tab>
                    <Tab>Lego-Cars</Tab>
                    <Tab>lego-star-wars</Tab>
                </TabList>
                <TabPanel>
                    {
                        legoCity.map(city => <CategoryLegoCity key={city._id} city={city}></CategoryLegoCity>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        legoCars.map(car => <CategoryLegoCars key={car._id} car={car}></CategoryLegoCars>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        legoCarWar.map(lego => <CategoryLegoCarWar key={lego._id} lego={lego}></CategoryLegoCarWar>)
                    }
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Category;
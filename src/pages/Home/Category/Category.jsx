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

        fetch(`http://localhost:5000/toy/lego-city`)
            .then(res => res.json())
            .then(data => {
                setLegoCity(data)
            })

    }, []);

    useEffect(() => {

        fetch(`http://localhost:5000/toy/lego-cars`)
            .then(res => res.json())
            .then(data => {
                setLegoCars(data)
            })
    }, []);


    useEffect(() => {

        fetch(`http://localhost:5000/toy/lego-star-wars`)
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
        <div data-aos="fade-up" className='mt-20 mb-16'>
            <h1 className='text-5xl text-center font-bold mb-10 text-orange-400'>Search By Category</h1>

            <Tabs>
                <TabList className="text-center bg-orange-300 font-bold test-5xl px-5 pt-8">
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
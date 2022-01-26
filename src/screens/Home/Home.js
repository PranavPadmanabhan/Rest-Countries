import { useContext, useEffect, useState } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import './Home.css';
import axios from 'axios';
import Navbar from '../../components/navbar/navbar';
import Country from '../../components/navbar/Country/Country';
import { ThemeContext } from '../../constants/ThemeContext';
import LoadingIndicator from 'react-loading-indicator';

function Home() {

    const [dropdown, setDropdown] = useState(false);
    const [cache, setcache] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
    const [regions, setregions] = useState([
        {
            title: "All",
            endpoint: "all"
        },
        {
            title: "European Union",
            endpoint: "eu"
        },
        {
            title: "European Free Trade Association",
            endpoint: "efta"
        },
        {
            title: "Caribbean Community",
            endpoint: "caricom"
        },
        {
            title: "Pacific Alliance",
            endpoint: 'pa'
        },
        {
            title: "African Union",
            endpoint: "au"
        },
        {
            title: "Union of South American Nations",
            endpoint: "usan"
        },
        {
            title: "Eurasian Economic Union",
            endpoint: "eeu"
        },
        {
            title: "Arab League",
            endpoint: 'au'
        },
        {
            title: "Association of Southeast Asian Nations",
            endpoint: "asean"
        },
        {
            title: "Central American Integration System",
            endpoint: "cais"
        },
        {
            title: "Central European Free Trade Agreement",
            endpoint: "cefta"
        },
        {
            title: "North American Free Trade Agreement",
            endpoint: "nafta"
        },
        {
            title: "South Asian Association for Regional Cooperation",
            endpoint: "saarc"
        }
    ]);
    const [countries, setCountries] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchCountries('all')
    }, []);

    useEffect(() => {
        setCountries(data.filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase())));
    }, [keyword]);


    const fetchCountries = (Endpoint) => {
        setLoading(true)
        var url = `https://restcountries.com/v2/${Endpoint}`
        axios.get(url).then((res) => {
            setCountries(res.data);
            if (Endpoint == 'all') {
                setData(res.data)
            }
            setLoading(false)
        })


    }


    return (
        <ThemeContext.Consumer>
            {
                ({ preferredTheme, DarkTheme }) => (
                    <div className="App" style={{ backgroundColor: preferredTheme.backgroundColor }}>
                        <Navbar />
                        <div className="short-navbar" style={{ backgroundColor: preferredTheme.backgroundColor }}>
                            <div className="search" style={{ backgroundColor: preferredTheme.elementColor }}>
                                <FaSearch color={DarkTheme ? "grey" : "black"} />
                                <input onChange={(e) => {
                                    setKeyword(e.target.value)
                                }}
                                    placeholder='Search'
                                    type="text"
                                    className="Input"
                                    style={{ backgroundColor: preferredTheme.elementColor }} />
                            </div>
                            <div className="dropdown" style={{ backgroundColor: preferredTheme.elementColor }}>
                                <div onClick={() => setDropdown(!dropdown)} className="dropdown-title-box" style={{ backgroundColor: preferredTheme.elementColor }}>
                                    <span onClick={() => setDropdown(!dropdown)} className="dropdown-title" style={{ color: preferredTheme.textColor }}>{selectedRegion}</span>
                                    <FaChevronDown onClick={() => setDropdown(!dropdown)} color={DarkTheme ? "white" : "black"} />
                                </div>
                                {dropdown && (
                                    <div className="dropdown-menu">
                                        {
                                            regions.map((item) => (
                                                <span
                                                    onClick={() => {
                                                        setSelectedRegion(item.title);
                                                        fetchCountries(item.title == 'All' ? 'all' : `regionalbloc/${item.endpoint}`)
                                                        setDropdown(false)
                                                    }}
                                                    className="dropdown-items"
                                                    style={{ backgroundColor: preferredTheme.elementColor, color: preferredTheme.textColor }}>{item.title}</span>

                                            ))
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                        {
                            loading?(
                               <div style={{display:"flex",flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:preferredTheme.backgroundColor}}>
                                   <LoadingIndicator  segmentLength={10} segmentWidth={10}/>
                               </div>
                            ):(
                                <div className="grid">
                            {
                                countries.map((country, index) => (
                                    <Country
                                        key={index}
                                        name={country.name}
                                        capital={country.capital}
                                        population={country.population}
                                        region={country.region}
                                        url={country.flag}
                                        country={country}
                                        list={data}
                                    />
                                ))
                            }
                        </div>
                            )
                        }
                    </div>
                )
            }
        </ThemeContext.Consumer>
    );
}

export default Home;

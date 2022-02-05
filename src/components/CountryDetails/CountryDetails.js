import React, { useContext, useEffect } from 'react';
import './CountryDetails.css'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../constants/ThemeContext';
import Navbar from '../navbar/navbar';
import { FaArrowLeft } from 'react-icons/fa';


function CountryDetails({country,list,onBackButtonPress}) {

    const { preferredTheme, DarkTheme} = useContext(ThemeContext)
    useEffect(() => {
     console.log(country);
    }, []);
    

    const findCountryByCode = (code) =>{
      var item =   list.filter((item) => item.alpha3Code == code);
      return item[0].name
    }
    
    return (
        <div style={{backgroundColor:preferredTheme.backgroundColor}} className='country-details'>
            <Navbar />
            <div style={{backgroundColor:preferredTheme.backgroundColor}} className="button-container">
                <div onClick={onBackButtonPress} className="back-button" style={{backgroundColor:preferredTheme.elementColor}}>
                    <FaArrowLeft onClick={onBackButtonPress} color={DarkTheme?"white":"black"} size={24}/>
                    <span onClick={onBackButtonPress} style={{color:preferredTheme.textColor}} className="backbutton-text">Back</span>
                </div>
            </div>
            <div className="details-container" style={{backgroundColor:preferredTheme.backgroundColor}}>
                <img src={country.flag} alt="" className="country-flag" />
                <div className="full-details" style={{backgroundColor:preferredTheme.backgroundColor}}>
                    <span style={{color:preferredTheme.textColor}} className="Country-name">{country.name}</span>
                    <div className="row" >
                        <div className="col1">
                            <span style={{color:preferredTheme.textColor}} className="native-name">Native Name :&nbsp;{(<span style={{color:preferredTheme.textColor,fontWeight:"normal",marginLeft:"0.5vw"}}>{country.nativeName}</span>)}</span>
                            <span style={{color:preferredTheme.textColor}} className="country-population">Population :&nbsp;{(<span style={{color:preferredTheme.textColor,fontWeight:"normal",marginLeft:"0.5vw"}}>{country.population}</span>)}</span>
                            <span style={{color:preferredTheme.textColor}} className="country-region">Region:&nbsp;{(<span style={{color:preferredTheme.textColor,fontWeight:"normal",marginLeft:"0.5vw"}}>{country.region}</span>)}</span>
                            <span style={{color:preferredTheme.textColor}} className="country-sub-region">Sub Region :&nbsp;{(<span style={{color:preferredTheme.textColor,fontWeight:"normal",marginLeft:"0.5vw"}}>{country.subregion}</span>)}</span>
                            <span style={{color:preferredTheme.textColor}} className="country-capital">Capital :&nbsp;{(<span style={{color:preferredTheme.textColor,fontWeight:"normal",marginLeft:"0.5vw"}}>{country.capital}</span>)}</span>
                        </div>
                        <div className="col-2">
                        <span style={{color:preferredTheme.textColor}} className="country-topLevel">Top Level Domain :&nbsp;{(<span style={{color:preferredTheme.textColor,fontWeight:"normal",marginLeft:"0.5vw"}}>{country.topLevelDomain}</span>)}</span>
                        <span style={{color:preferredTheme.textColor,display:"flex",flexDirection:"row"}} className="country-currencies">Currencies :&nbsp;{country.currencies.map((item,index) => (<span key={index} style={{color:preferredTheme.textColor,fontWeight:"normal",marginLeft:"0.1vw",}}>{item.name}{(country.currencies.length>1 & country.currencies.length-1 != index)?",":null}</span>))}</span>
                        <span style={{color:preferredTheme.textColor,display:"flex",flexDirection:"row"}} className="country-languages" >Languages :&nbsp;{country.languages.map((item,index) => (<span key={index} style={{color:preferredTheme.textColor,fontWeight:"normal",marginLeft:"0.5vw"}}>{item.name}{(country.languages.length>1 & country.languages.length-1 != index)?",":null}</span>))}</span>
                        </div>
                    </div>
                    {country.borders != null && (<div className="border">
                            <span style={{color:preferredTheme.textColor}} className="border-countries">Border Countries:</span>
                            <div className='border-grid'>
                            {
                                country.borders.map((item,index) => (
                                    <div key={index} style={{fontSize:findCountryByCode(item).length>13?"1.5vw":"2vw" , backgroundColor:preferredTheme.elementColor,color:preferredTheme.textColor}} className="border-country">
                                        {findCountryByCode(item)}
                                    </div>
                                ))
                            }
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;

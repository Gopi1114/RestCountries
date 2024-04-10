import React from "react";
import './index.css';
const Header=()=>{
  
  
    window.addEventListener('DOMContentLoaded',()=>{

        const search = document.getElementById('search')
        search.addEventListener('click',(e)=>{
            const {value}=e.target
            const countryName = document.querySelectorAll('.country-name')
            countryName.forEach((name)=>{
                if(name.innerText.toLowerCase().includes(value.toLowerCase)){
                    name.parentElement.parentElement.style.display='block'
                }else{
                    name.parentElement.parentElement.style.display='none'
                }
            })
        })

    })


    return(
        <>
       <section className="filter">
        <form className="form-control">
            <input type="search " name="search" id="search" placeholder="SEARCH A COUNTRY" />
        </form>
        <div className="region-filter">
            <select name="select" id="select" className="select">
                <option value=" Africa"> Africa </option>
                <option value="America"> America </option>
                <option value="Asia"> Asia </option>
                <option value="Europe"> Europe </option>
                <option value="oceania"> oceania </option>
                
               
                

            </select>
        </div>

       </section>
        </>
    )
}
export default Header
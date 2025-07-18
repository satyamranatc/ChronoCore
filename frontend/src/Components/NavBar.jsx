import React from 'react'
import "./NavBar.css"

import { HomeIcon, SearchIcon, Users2Icon, ChartAreaIcon } from "lucide-react"

import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <div id="LogoSection">
                <h2>ChronoCore</h2>
                <p>Manage Time, People and Work</p>
            </div>

            <div id="SearchBar">
                <input type="text" placeholder='Search...' />
                <SearchIcon id='SearchIcon' />
            </div>

            <ul>
                <li> <HomeIcon /> <Link to={"/"} >Home</Link></li>
                <li> <Users2Icon /> <Link to={"/manage"}>Manage</Link></li>
                <li> <ChartAreaIcon /> <Link to={"/reports"}>Reports</Link></li>

            </ul>
        </nav>
    )
}

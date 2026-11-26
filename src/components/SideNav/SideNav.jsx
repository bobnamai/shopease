import React from 'react';
import './SideNav.css';


function SideNav() {
    return (

        <section>
            <div className="side-nav">
                <div className="side-nav-search">
                    <input type="text" placeholder="Search..." />
                    

                </div>

                <div className="side-nav-links">
                    <ul class="nav-locations">
                        <ul className="nav-locations">
                            <li><label><input type="checkbox" name="locations" value="location-1" /> Location 1</label></li>
                            <li><label><input type="checkbox" name="locations" value="location-2" /> Location 2</label></li>
                            <li><label><input type="checkbox" name="locations" value="location-3" /> Location 3</label></li>
                            <li><label><input type="checkbox" name="locations" value="location-4" /> Location 4</label></li>
                        </ul>

                    </ul>
                </div>
            </div>


        </section>

    );
}

export default SideNav;
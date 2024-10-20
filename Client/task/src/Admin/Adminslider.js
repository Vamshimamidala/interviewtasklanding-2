import React from 'react';
import { NavLink } from 'react-router-dom';
 

const AdminSlider = () => {
  return (
    <div className="admin-slider">
      <section>
        <ul className="slider-menu">
          <li className="slider-item">
            <NavLink to="get" className="slider-link">
              Get in Touch
            </NavLink>
          </li>
           
        </ul>
      </section>
    </div>
  );
};

export default AdminSlider;

import React, { Component } from 'react';
import SidebarProduct from '../../components/sidebar_product/sidebar_product';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <SidebarProduct/>
            </div>
        );
    }
}

export default SideBar;
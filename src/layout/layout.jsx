import React from 'react';
import {Footer, Navbar} from "@/components";

const Layout = ({children}) => {
    return (
        <div >
            <Navbar/>
            <div className={'min-h-[90vh] md:mt-32 mt-16'}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
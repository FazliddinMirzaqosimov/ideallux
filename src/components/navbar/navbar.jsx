import DesktopNavbar from "@/components/navbar/desktop-navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";

const Navbar = () => {
    return (
        <div className={''}>
            <div className={'md:block hidden'}>
                <DesktopNavbar/>
            </div>
            <div className={'md:hidden block'}>
                <MobileNavbar/>
            </div>
        </div>
    );
};

export default Navbar;
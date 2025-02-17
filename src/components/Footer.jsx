import escooter from "/src/assets/images/vehicle.svg";
import facebook from "/src/assets/icons/facebook.svg";
import insta from "/src/assets/icons/instagramm.svg";
import twitter from "/src/assets/icons/twitter.svg";
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <footer className="relative mt-32 footer-clr text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="relative -ml-16 md:-ml-32 -mt-32">
                    <img src={escooter} alt="E-Scooter" className="w-2xl transform -scale-x-100" />
                </div>
                <div className="w-full md:w-3/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10 md:text-left">
                        <div>
                            <h3 className="font-semibold text-lg mb-8">About</h3>
                            <ul className="mt-2 space-y-5 font-light">
                                <li><Link href="#" underline="none" color="inherit">Company</Link></li>
                                <li><Link href="#" underline="none" color="inherit">Teams</Link></li>
                                <li><Link href="#" underline="none" color="inherit">Profile</Link></li>
                                <li><Link href="#" underline="none" color="inherit">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-8">Resources</h3>
                            <ul className="mt-2 space-y-5 font-light">
                                <li><Link href="#" underline="none" color="inherit">Contact</Link></li>
                                <li><Link href="#" underline="none" color="inherit">Application</Link></li>
                                <li><Link href="#" underline="none" color="inherit">FQA Features</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-8">Legals</h3>
                            <ul className="mt-2 space-y-5 font-light">
                                <li><Link href="#" underline="none" color="inherit">Copyright Privacy</Link></li>
                                <li><Link href="#" underline="none" color="inherit">Policy Disclaimer</Link></li>
                                <li><Link href="#" underline="none" color="inherit">Company</Link></li>
                                <div className="flex gap-4 justify-center sm:justify-start">
                                    <img src={facebook} alt="Facebook" 
                                         className="w-6 transition duration-300 hover:invert hover:brightness-150 cursor-pointer"
                                         onClick={() => handleClick("facebook")} />
                                    <img src={twitter} alt="Twitter" 
                                         className="w-6 transition duration-300 hover:invert hover:brightness-150 cursor-pointer"
                                         onClick={() => handleClick("twitter")} />
                                    <img src={insta} alt="Instagram" 
                                         className="w-6 transition duration-300 hover:invert hover:brightness-150 cursor-pointer"
                                         onClick={() => handleClick("instagram")} />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center font-light font-poppins mt-10">
                &copy; Copyright 2021. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;

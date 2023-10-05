import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import Logo from './logo';
import LoginPageHeader from '../cmps/login/login-page-header';


export function HomeHeader ({ boards }) {
    return (
        <header className="home-header">
               <Logo />
                <div className='header-btns'>
                    <Link><button className="btn-login">Pricing</button></Link>
                    <Link ><button className="btn-login">Contact Sales</button></Link>
                    <Link ><button className="btn-login">Log in</button></Link>
                    <Link><button className='btn-start'>Get started <span className="arrow"><HiOutlineArrowRight /></span></button></Link>
                </div>
        </header>
    )
}
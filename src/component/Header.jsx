import React from 'react'

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/home'><p>home</p></Link></li>
                <li><Link to='/aboutUs'><p>About us</p></Link></li>
                <li><Link to='/login'><p>login</p></Link></li>
                <li><Link to='/signUp'><p>Sign up</p></Link></li>
            </ul>
        </div>
    )
}

export default Header;
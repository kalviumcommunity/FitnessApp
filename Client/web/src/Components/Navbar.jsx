import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
                <img src="https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEUY9gPsuXjKxfsnNQODpyxeekFHhMCfrMiCnSMpWmkd%2Bq%2Br9vEuzJC8aVS7xpyg8bQj73tQiNDGZod0lsWjWZBXtclwnqaDm4RtB3CyKrtoHEelnzAjyVpIXD54WGqNnuhP2pjgg8BgxpbHtjUKMvvh9SMBiIUWRmwtHPq4q37vzj75ARs53x9IuH5ZXQ%2FRJbyzWjR4yQ4E0%2B2AGL165UJzsIVUdDa6UdOlSiwy5xRpFSwHn3zQ3fXIMeiT5Ev659H5DMW4T%2BdjBvefrxkkW53bF5L23fkgkmfLaBXcbxf9JOB%2BUxYOm7vm5zABAGDObjDvYqZHeyo0pcU%2F3BBPpSimdoFIAxT%2FNIBZjrc6gPf1ZNmMelcpSQ%2FwoJZtq99Oahr7ccF2aNn7bf0Og0UkzC1AAq3oLC1ZJiysDSsotECJZVQxSJQyJxeQsrp8p%2FQ895D5JkVjdzp7XIEn6iHN3CTwTaocYXEZF0IXD3smGOi05tQ1jBy78td2hnPhsQ0pahZs0PX5TZvM0B%2F60oNDVfMamwKZRAkv%2FrUiHTsMmUSVmPZAZHQNUB4sIQ%2F6oCcielgp8gu4M6W9qA62XaqX610%3D&sz=w2940-h1598" alt="Logo" className="logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;



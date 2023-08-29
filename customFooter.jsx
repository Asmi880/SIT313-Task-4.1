import "./customFooter.css"; 

const customFooter = () => { 
    return (
        <div className="customMain">

            <div className="customFoot">
                <div className="customExplore">
                    <ul>
                        <p>
                            Explore
                        </p>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Questions</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Tutorials</a></li>
                    </ul>
                </div>
                <div className="customExplore customSupport"> {}
                    <ul>
                        <p>
                            Support
                        </p>
                        <li><a href="#">Faq's</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="customExplore customSupport1"> {}
                    <ul>
                        <p>
                            Stay Connected
                        </p>
                        <div className="customPics"> {}
                            <li><img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" alt="Instagram" /></li>
                            <li><img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" alt="Facebook" /></li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" /></li>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="customDev"> {}
                <p>DeV@Deakin 2023</p>
                <div className="customDev2"> {}
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Code Of Conduct</p>
                </div>
            </div>
        </div>
    );
};

export default customFooter;






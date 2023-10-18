
function Footer(props){
    return(
        <>
        <footer className="foot">
        <div className="services">
            <ul className="ulFirst">
                <span className="footer-text">Customer Care</span> 
                <li className="li-class">SATISFACTION</li>
                <li className="li-class">DELIVERY POLICIES</li>
                <li className="li-class">CANCELLATIONS</li>
                <li className="li-class">RETURN POLICY</li>
            </ul>
        </div>

        <div className="logo"> 
            <div className="gift-main">
                <img className="footerImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9KI8k9ub48UCP0krPOvkRS8uNPJX71ns3sCe1g-VJHXVuYr7sIEcbgQ-1ID_YPXBBm4&usqp=CAU" alt="omg"/>
                <p className="footer-text">Shopify/EST.2009</p>
                <div className="logo-item">
                 <span  className="logoEdit"> <ion-icon name="logo-linkedin"></ion-icon></span>  
                 <span  className="logoEdit"> <ion-icon name="logo-facebook"></ion-icon></span>  
                 <span  className="logoEdit"> <ion-icon name="logo-instagram"></ion-icon></span>  
                </div>
            </div>
        </div>

        <div class="notice">
            <ul>
                <span className="footer-text">Shopify</span> 
                <li className="li-class-1">TERMS OF SERVICE</li>
                <li className="li-class-1">PRIVACY POLICY</li>
                <li className="li-class-1">CAREER OPPORTUNITIES</li>
                <li className="li-class-1">MORE INFORMATION</li>
            </ul>
        </div>
    </footer>
        </>
    )
}

export default Footer

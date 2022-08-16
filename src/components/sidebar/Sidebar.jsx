import "./sidebar.css"

const Sidebar = () => {


    return (

    <div className="sidebar" >

        <div className="sideBarItem">
            <span className="sideBarTitle">
                ABOUT ME
            </span>
            <img src="https://img1.wsimg.com/isteam/ip/783396ae-ec8a-4e83-b7a3-d292afc4dc67/Inderpreet%20Rana%20Lawyer.jpg/:/cr=t:0%25,l:3.13%25,w:93.75%25,h:100%25/rs=w:400,h:533.3333333333334,cg:true" alt=" " />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sunt voluptatem minus eius nemo quisquam?
            </p>
        </div>

        <div className="sidebarItem" >  
            <span className="sidebarTitle" > CATEGORIES </span>

            <ul className="sidebarList">

                <li className="sidebarListItem" >Life</li>
                <li className="sidebarListItem" >Music</li>
                <li className="sidebarListItem" >Style</li>
                <li className="sidebarListItem" >Sport</li>
                <li className="sidebarListItem" >Tech</li>
                <li className="sidebarListItem" >Cinema</li>
                
            </ul>
        </div>
        <div className="sidebarItem" >

            <span className="sidebarTitle"> FOLLOW US </span>

            <div className="sidebarSocial" >

            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>

            </div>

        </div>

    </div>

    );
}

export default Sidebar
import "./header.css"

const Header = () => {


    return (

    <div
    className="header"
    >
        <div className="headerTitles" > 
            <span className="headerTitleSm" > </span>
            <span className="headerTitleLg" > The Daily Rana </span>
            
        </div>
        <img className="headerImg" src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        
    </div>

    )
}

export default Header;
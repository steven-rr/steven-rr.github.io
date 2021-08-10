import React , {useState} from 'react'

function NavButton() {

    const [menuOpen, setMenuOpen] = useState(false);
    

    function handleMenuClick() {
        setMenuOpen(prevState =>
            {
                return !prevState;
            })
    }


    const desktopMode = () => {
        if(window.innerWidth > 800)
        {
            desktopMode = true;
        }
        else
        {
            desktopMode = false;
        }
    };

    return (
        <div className = {`menu-buttn ${menuOpen ? 'open transition': ''}` } onClick={handleMenuClick} >
			<div className={`menu-buttn-top ${menuOpen ? 'transition' : ''}`}></div>
		</div>
    )
}

export default NavButton

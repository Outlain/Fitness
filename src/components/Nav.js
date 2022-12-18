

export const Nav = () => {
    window.onscroll = function () {
        var navbar = document.getElementById("navbar");
        if (window.pageYOffset > 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    return (
        <nav id="navbar">
            <ul>
                <li><a href="#About">New Lifts</a></li>
            </ul>
        </nav>
    )
}
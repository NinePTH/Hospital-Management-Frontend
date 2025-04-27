const Footer = () => {
    const thisYear = new Date().getFullYear();
    return (
        <footer className="bg-white text-black py-2 px-8 md:px-0">
            <div className="container mx-auto text-center text-xs lg:text-base">
                <p>&copy; {thisYear} Siam Hospital. All rights reserved. Made with 💝 by NinePTH, Brooks, Pop, Boom, Nemo, and Yacine.</p>
            </div>
        </footer>
    )
}

export default Footer
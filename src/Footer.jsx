function Footer (){
    return(
        <div className="flex justify-start flex-col w-full h-auto bg-custom-secondary text-gray-200 px-10 py-5 text-sm">
            <div>
                <h1 className="text-3xl font-semibold mb-2 montserrat-bold">SNIPER KUN</h1>
            </div>
            <div className="flex justify-evenly">
                <div className="flex flex-col leading-6">
                    <h2 className="font-bold text-lg mb-2">Social Media</h2>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                </div>
                <div className="flex flex-col leading-6">
                    <h2 className="font-bold text-lg mb-2">Busines Contact</h2>
                    <a href="">GitHub</a>
                    <a href="">Email</a>
                    <a href="">WhatsApp</a>
                </div>
                <div className="flex flex-col leading-6">
                    <h2 className="font-bold text-lg mb-2">Order Type</h2>
                    <a href="">Premium Full Body</a>
                    <a href="">Standard Waist Up</a>
                    <a href="">Basic Hal Bust Up</a>
                </div>
            </div>
            <hr className="border-t border-gray-600 my-4" />
            <p className="text-center">© 2024 Sniper Kun Comission. All rights reserved.</p>
        </div>
    )
}
export default Footer
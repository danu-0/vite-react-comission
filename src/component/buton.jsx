import { useNavigate } from "react-router-dom"
function Buton(){
const navigate = useNavigate();

const orderClick = () => {
    navigate('/order');
}

    return(
        <div className="flex pt-5 pb-20 sm:pt-20">
            <button className="flex items-center justify-center bg-gray-100 text-custom-secondary text-lg rounded-2xl px-16 py-2 montserrat-bold hover:bg-yellow-700  hover:text-gray-200 duration-500" onClick={orderClick}>
                 Order
            </button>
            <div className="text-gray-100 font-light break-words whitespace-normal w-25 px-4 bg-yellow montserrat-regular">
                <p>Order commissions more easily <br />
                in sniper kun</p>
            </div>
        </div>
    )
}
export default Buton
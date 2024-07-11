import Buton from "./buton"

function Section1()
{
return(
    
    <div className="flex flex-col sm:flex-row w-full">
        <div className="sm:w-56% pt-32 sm:pt-64 px-10 flex-grow">
        <h1 className="break-words whitespace-normal text-4xl sm:text-6xl text-gray-100 leading-snug montserrat-bold">I will draw an illustration of your character in manhwa, manga art style</h1>
        <Buton/>
  </div>
  <div className="sm:w-1/2 ">
  </div>
    </div>
)
}
export default Section1
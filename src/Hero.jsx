import Section1 from "./component/section1"
import bg from "./assets/bg.jpg"

function Hero() {

  return (
    <div className='flex justify-center h-auto sm:h-[calc(100vh-20px)]  text-black font-semibold bg-cover bg-center'  style={{ backgroundImage: `url(${bg})` }}>
      < Section1 />
    </div>
  )
}

export default Hero

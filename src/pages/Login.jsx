/* eslint-disable global-require */
/* eslint-disable import/newline-after-import */
import { Link } from 'react-router-dom'
import Image from '../assets/images/avt.svg'
import image2 from '../assets/images/login1.svg'
function Login() {
  return (
    <div className="fixed h-[100vh] w-[100vw] bg-[#f2edf3]">
      <div className="absolute w-[77.5rem] bg-gradient-to-l from-secondary_color to-white h-[38.125rem] rounded-[32px] shadow-[1px_1px_5px_5px_rgba(154,85,255,0.1),-1px_-1px_5px_5px_rgba(154,85,255,0.1)] bg-[#ffffff] top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] flex justify-around">
        <div className="img flex w-[31.25rem]">
          <img src={image2} alt="" className="" />
        </div>

        <div className="flex justify-center items-center">
          <form action="" className="w-[25rem]">
            <div className="flex justify-center flex-col mb-[1.5rem] text-center">
              <img src={Image} alt="" className="h-[6.25rem] mb-[24px]" />
              <h2 className="my-[0.938rem] text-[#ffff] text-[2.9rem] tracking-[0.25rem]">
                WELCOME
              </h2>
            </div>

            <div className="flex gap-[16px] mb-[16px] mt-0 text-main_text">
              <ion-icon name="person-outline" className="text-[1.5rem]" />
              <div className="">
                <div className="text-[1.5rem]">Username</div>
                <input
                  type="text"
                  className="text-[1.125rem] w-[21.875rem] bg-transparent outline-0 left-0 top-0 mb-[12px] mt-[8px] border-b-[3px] border-main_color"
                  required
                />
              </div>
            </div>

            <div className="flex gap-[16px] mt-0 text-main_text">
              <ion-icon name="key-outline" className="text-[1.5rem]" />
              <div>
                <div className="text-[1.5rem]">Password</div>
                <input
                  type="password"
                  className="text-[1.125rem] w-[21.875rem] bg-transparent outline-0 left-0 top-0 mb-[12px] mt-[8px] border-b-[3px] border-main_color"
                  required
                />
              </div>
            </div>

            <Link to="/" className="my-[1.5rem] flex justify-end text-[#ffff] mr-[1.5rem]">
              Forgot Password
            </Link>
            <button
              type="submit"
              className="bg-main_color text-white px-[4rem] py-[12px] mx-[50%] translate-x-[-50%] rounded-[16px]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

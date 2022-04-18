import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'

import { UilUser, UilKeySkeleton } from '@iconscout/react-unicons'
import Logo from '../assets/images/avt.svg'
import Banner from '../assets/images/login1.svg'
// import Popup from '../components/Common/Popup'

import authApi from '../api/auth'
import { setLoading } from '../store/loadingSlice'
import { setPopup } from '../store/popupSlice'
import { checkAuth } from '../store/authSlice'

const popupStateSuccess = {
  open: true,
  success: true,
  message: 'Sign In Success'
}

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const schema = yup.object().shape({
    email: yup.string().email('Email is invalid!').required('This field is required'),
    password: yup.string().min(6).required('This field is required')
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitHandler = async (frmData) => {
    dispatch(setLoading(true))
    try {
      const { data } = await authApi.login(frmData)
      const { accessToken, refreshToken } = data
      localStorage.setItem('token', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      dispatch(checkAuth())
      dispatch(setPopup(popupStateSuccess))
      reset()
      navigate('/')
    } catch (error) {
      const popupState = {
        open: true,
        ...error.data
      }
      dispatch(setPopup(popupState))
    }
    dispatch(setLoading(false))
  }

  return (
    <div className={clsx('h-[100vh] w-[100vw]')}>
      {/* <Popup /> */}
      <div className="absolute w-[77.5rem] bg-gradient-to-l from-secondary_color to-white h-[38.125rem] rounded-[32px] shadow-[1px_1px_5px_5px_rgba(154,85,255,0.1),-1px_-1px_5px_5px_rgba(154,85,255,0.1)] bg-[#ffffff] top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] flex justify-around">
        {/* Banner */}
        <div className="img flex w-[31.25rem]">
          <img src={Banner} alt="" className="" />
        </div>
        {/* Form */}
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="w-[25rem]">
            {/* Logo and info */}
            <div className="flex justify-center flex-col mb-[1.5rem] text-center">
              <img src={Logo} alt="" className="h-[6.25rem] mb-[24px]" />
              <h2 className="my-[0.938rem] text-[#ffff] text-[2.9rem] tracking-[0.25rem]">
                WELCOME
              </h2>
            </div>
            {/* Username field */}
            <div className="mb-[16px] mt-0 text-main_text">
              <div className="">
                <div className="flex justify-start items-center">
                  <UilUser size={24} />
                  <label htmlFor="" className="text-[1.5rem] ml-3">
                    Email
                  </label>
                </div>
                <input
                  type="text"
                  className={clsx(
                    'text-[1.125rem] w-[100%] bg-transparent outline-0 left-0 top-0 mb-[12px] mt-[8px] border-b-[3px] border-main_color',
                    errors.email && 'border-red-600'
                  )}
                  autoFocus
                  required
                  {...register('email')}
                />
                <p>{errors && errors.email?.message}</p>
              </div>
            </div>
            {/* Password field */}
            <div className="mt-0 text-main_text">
              <div>
                <div className="flex justify-start items-center">
                  <UilKeySkeleton size={24} />
                  <label htmlFor="" className="text-[1.5rem] ml-3">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  className={`text-[1.125rem] w-[100%] bg-transparent outline-0 left-0 top-0 mb-[12px] mt-[8px] border-b-[3px] ${
                    errors.password ? 'border-red-600' : 'border-main_color'
                  }`}
                  required
                  {...register('password')}
                />
                <p>{errors && errors.password?.message}</p>
              </div>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="bg-main_color text-white font-bold px-[4rem] py-[12px] mx-[50%] translate-x-[-50%] rounded-[16px] hover:opacity-80"
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

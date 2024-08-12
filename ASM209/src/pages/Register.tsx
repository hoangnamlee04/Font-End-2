import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { User } from '~/types/User'
import { joiResolver } from '@hookform/resolvers/joi'
import instance from '~/apis'
import { userSchema } from '~/validation/user'
import { useState } from 'react'

const Register = () => {
  const navigate = useNavigate()
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: ''
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: joiResolver(userSchema)
  })

  const onSubmit = (user: User) => {
    ;(async () => {
      try {
        const { data } = await instance.post(`/register`, user)
        if (data.user) {
          setNotification({ message: 'Đăng ký thành công', type: 'success' })
          setTimeout(() => {
            navigate('/login')
          }, 2000)
        }
      } catch (error) {
        setNotification({ message: 'Đăng ký thất bại', type: 'error' })
      }
    })()
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md relative'>
      <h1 className='text-2xl text-center font-semibold mb-4'>Đăng ký</h1>

      {notification.message && (
        <div
          className={`mb-4 p-4 rounded-md shadow-md font-bold flex items-center justify-center ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
          {notification.message}
        </div>
      )}

      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className='block mb-1'>Username</label>
          <input
            type='text'
            id='username'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Username...'
            {...register('username', { required: 'Username là bắt buộc' })}
          />
          {errors.username && <span className='text-red-500'>{errors.username.message}</span>}
        </div>
        <div>
          <label className='block mb-1'>Email</label>
          <input
            type='email'
            id='email'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Email...'
            {...register('email', { required: 'Email là bắt buộc' })}
          />
          {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
        </div>
        <div>
          <label className='block mb-1'>Mật khẩu</label>
          <input
            type='password'
            id='password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Mật khẩu...'
            {...register('password', {
              required: 'Mật khẩu là bắt buộc',
              minLength: { value: 3, message: 'Mật khẩu phải có ít nhất 3 ký tự' }
            })}
          />
          {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
        </div>

        <button className='w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300'>
          Xác nhận
        </button>
      </form>
    </div>
  )
}

export default Register

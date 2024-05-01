import { useForm } from 'react-hook-form';
function LoginPage() {


  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='flex h-screen items-center justify-center'>

      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <h1 className='text-2xl font-bold '>Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="email"
          />
          {errors.email && <p className="text-red-500">Email is requited</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="password"
          />
          {errors.password && <p className="text-red-500">Password is requited</p>}

          <button type="submit"
            className="w-full bg-zinc-900 text-white px-4 py-2 rounded-md my-2"
          >Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
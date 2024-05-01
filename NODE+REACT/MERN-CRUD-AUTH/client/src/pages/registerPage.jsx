import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function registerPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { Signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navegate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navegate('/tasks')
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    Signup(values)
  })

  return (
    <div className="bg-zinc-800 max-2-md p-10 rounded-md">
        {
            registerErrors.map((error, i) => (
                <div className="bg-red-500 p-2 text-white" key={i}>
                    {error}
                </div>
            ))
        }
      <form
        onSubmit={onSubmit}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="username"
        />
        {errors.username && <p className="text-red-500">Username is requited</p>}

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
        >Register</button>
      </form>
    </div>
  );
}

export default registerPage;

import { useForm } from 'react-hook-form';
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (data) => {
    console.log('test', data);
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-group">
          <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              {...register('email', {
                required: true,
              })}
            />
            {errors?.email?.type === 'required' && (
              <p className="text-danger fw-bold">Email is required</p>
            )}
          </div>
          <div>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              type="password"
              className="form-control mb-3"
              id="exampleInputPassword1"
              placeholder="Password"
              {...register('password', {
                required: true,
                minLength: 8,
              })}
            />
            {errors?.password?.type === 'required' && (
              <p className="text-danger fw-bold">Password is required</p>
            )}
            {errors?.password?.type === 'minLength' && (
              <p className="text-danger fw-bold">
                Password must be at least 8 characters long
              </p>
            )}
          </div>
        <button type="submit" className="btn btn-primary mb-3">
          Login
        </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;

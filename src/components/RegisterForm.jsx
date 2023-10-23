import Select from 'react-select';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (data) => {
    console.log('test', data);
  };
  const GenderOptions = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' },
  ];
  const HobbiesOptions = [
    { value: 'swimming', label: 'swimming' },
    { value: 'reading', label: 'reading' },
    { value: 'walking', label: 'walking' },
    { value: 'writing', label: 'writing' },
  ];
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-group">
          <div>
            <label htmlFor="exampleInputUserName">User Name</label>
            <input
              name="userName"
              type="text"
              className="form-control mb-3"
              id="exampleInputUserName"
              placeholder="UserName"
              {...register('userName', {
                required: true,
                minLength: 4,
              })}
            />
            {errors?.userName?.type === 'required' && (
              <p className="text-danger fw-bold">User name is required</p>
            )}
            {errors?.userName?.type === 'minLength' && (
              <p className="text-danger fw-bold">User name at least 4 chars</p>
            )}
          </div>
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
          <div>
            <label htmlFor="exampleInputconfirmPassword1">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              className="form-control mb-3"
              id="exampleInputconfirmPassword1"
              placeholder="Confirm Password"
              {...register('confirmPassword', {
                required:true,
                minLength:8
              })}
            />
            {errors?.confirmPassword?.type === 'required' && (
              <p className="text-danger fw-bold">Password is required</p>
            )}
            {errors?.confirmPassword?.type === 'minLength' && (
              <p className="text-danger fw-bold">
                Password must be at least 8 characters long
              </p>
            )}
          </div>
          <div className="Seclect">
            <label htmlFor="exampleselectGender">Select Gender</label>
            <Select id="selectGender" isClearable options={GenderOptions} />
          </div>
          <div className="Seclect">
            <label htmlFor="exampleselectHobbies">Select Hobbies</label>
            <Select
              id="selectHobbies"
              isClearable
              isMulti
              options={HobbiesOptions}
            />
          </div>
        </div>
        <div className="checkBox my-3">
          <input type="checkbox" name="" id="checkTerms" className="me-3" />
          <label htmlFor="checkTerms">Check Terms and conditions</label>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;

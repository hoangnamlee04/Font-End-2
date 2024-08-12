import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../types/User";
import { useNavigate } from "react-router-dom";
import instance from "../apis";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (user) => {
    try {
      const { data } = await instance.post(`/login`, user);
      localStorage.setItem("token", data.accessToken);
      if (data.user) {
        toast.success("Đăng nhập thành công");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch {
      toast.error("Đăng nhập thất bại");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-5 shadow-lg"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h1 className="text-center mb-4">Đăng nhập</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="form-label fs-5">Email</label>
            <input
              type="email"
              className={`form-control form-control-lg ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Email..."
              {...register("email", {
                required: "Email là bắt buộc",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email không hợp lệ",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="form-label fs-5">Password</label>
            <input
              type="password"
              className={`form-control form-control-lg ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Password..."
              {...register("password", {
                required: "Mật khẩu là bắt buộc",
                minLength: {
                  value: 3,
                  message: "Mật khẩu phải có ít nhất 3 ký tự",
                },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

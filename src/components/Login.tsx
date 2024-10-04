import { useForm } from "react-hook-form";
import Box from "./Box";
import { useNavigate } from "react-router-dom";
import { url } from "../types/url";
import toast from "react-hot-toast";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${url}/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      if (result.accessToken) {
        navigate("/todo-list");
        toast.success("Вход выполнен успешно", { position: "bottom-right" });
      } else {
        toast.error("Неверный email или пароль", { position: "bottom-right" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Произошла ошибка", { position: "bottom-right" });
    }
  };

  return (
    <Box title="Login">
      <form
        className="flex flex-col space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <input
            {...register("email", {
              required: "Не верный Email",
              validate: (value) => value.includes("@") || "Email is not valid",
            })}
            type="text"
            className="rounded-lg p-2 shadow-md w-full"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </label>

        <label>
          <input
            {...register("password", {
              required: "Не верный пароль",
              minLength: { value: 8, message: "Минимум 8 символов" },
            })}
            type="password"
            className="rounded-lg p-2 shadow-md w-full"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </label>

        <button className="bg-black text-white text-center p-2 rounded-lg shadow-md">
          Log In
        </button>
      </form>
    </Box>
  );
}

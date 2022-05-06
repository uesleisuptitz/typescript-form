import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  name: string;
  email: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Nome
      <input {...register("name", { required: true })} />
      <p>{errors.name?.message}</p>
      Email
      <input {...register("email", { required: true })} />
      <p>{errors.email?.message}</p>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;

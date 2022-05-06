import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default App;

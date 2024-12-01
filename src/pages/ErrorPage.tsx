import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error: any = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-5">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <img className="w-72" src="/404.svg"/>
      <p className="text-red-500">{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;

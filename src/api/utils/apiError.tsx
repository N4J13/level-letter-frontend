import { AxiosError } from "axios";

export default function ErrorComponent({ error }: { error: AxiosError }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-4xl font-bold text-red-500">{error.message}</div>
      <div className="text-lg font-bold text-red-500">Something went wrong</div>
    </div>
  );
}

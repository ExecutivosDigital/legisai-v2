import { ChevronDown } from "lucide-react";

export function Section1() {
  return (
    <div className="flex h-80 flex-col rounded-lg bg-white p-4">
      <div className="flex w-full items-center justify-end">
        <div className="text-light-dark flex items-center justify-between rounded-md border px-2 py-1">
          <span>{new Date().toLocaleDateString("pt-BR")}</span>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

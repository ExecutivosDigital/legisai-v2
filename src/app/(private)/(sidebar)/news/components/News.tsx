import { Modal } from "@/components/ui/modal";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface NewsCardProps {
  title: string;
  summary: string;
}

export function NewsCard({ title, summary }: NewsCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative flex w-full flex-col items-center justify-between rounded-lg p-1 pb-2 transition-all duration-300 hover:shadow-lg lg:flex-row">
      <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-zinc-200 md:w-2/3 xl:w-3/4" />
      <div className="flex items-center gap-2">
        <div className="bg-primary/10 border-primary h-max w-max rounded-full border-2 px-3 py-3">
          <Image
            src="./icons/news.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 max-h-5 min-h-5 w-5 max-w-5 min-w-5"
          />
        </div>
        <div>
          <h2 className="text-dark text-lg font-medium">{title}</h2>
          <p className="w-full text-gray-600 lg:hidden lg:w-[650px] lg:truncate">
            {summary.length > 100 ? summary.slice(0, 100) + "..." : summary}
          </p>
          <p className="hidden w-full text-gray-600 lg:block lg:w-[650px] lg:truncate">
            {summary}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-600">2m atrás</span>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary rounded-xl px-4 py-1 font-bold text-white duration-700 hover:scale-[1.05]"
        >
          Resumo
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        className="h-max lg:h-max lg:w-max"
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 py-2 pb-8">
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-primary absolute top-2 left-2 flex items-center gap-2 font-bold"
          >
            <div className="rounded-full">
              <ArrowLeft className="text-primary h-6 w-6" />
            </div>
            Voltar
          </button>
          <Image
            src="/logos/logo.png"
            alt=""
            width={2000}
            height={2000}
            className="h-auto w-40"
          />
          <div className="flex flex-col">
            <h1 className="text-dark self-center text-3xl font-bold">
              {title}
            </h1>
            <p className="max-w-[750px] px-4 py-4 text-justify">{summary}</p>
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-primary bottom-4 rounded-xl px-6 py-4 text-xl text-white"
          >
            Voltar para Legis Dados
          </button>
        </div>
      </Modal>
    </div>
  );
}

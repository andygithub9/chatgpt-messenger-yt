"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

export default function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);

  // useSWR 不一定要用於 data fetching, 可以把它當作 global store 在組件之間後傳遞狀態或資料, 類似於 useState 但是他可以在組件之間共用
  // https://swr.vercel.app/docs/mutation#bound-mutate
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{ control: (state) => "bg-[#434654] border-[#434654]" }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

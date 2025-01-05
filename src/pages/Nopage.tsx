import React from "react";
import { useTranslation } from "react-i18next";

const NoPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-50">
      <div className="w-1/2 text-center items-center rounded-3xl justify-center bg-blue-900/10 backdrop-blur p-6">
        <h1 className="text-4xl font-bold mb-2">{t("404")}</h1>
        <p className="text-lg m-2">
          {t("404_desc")}
        </p>
      </div>
    </div>
  );
};

export default NoPage;

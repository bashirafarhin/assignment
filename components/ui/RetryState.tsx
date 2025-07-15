"use client";

import { useTranslation } from "react-i18next";
import Button from "./Button";

interface RetryStateProps {
  errorMessage?: string;
  onRetry: () => void;
}

const RetryState: React.FC<RetryStateProps> = ({ errorMessage, onRetry }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-4">
      <p className="text-red-500 font-semibold text-center">
        {errorMessage || t("defaultError")}
      </p>
      <Button onClick={onRetry}>{t("retry")}</Button>
    </div>
  );
};

export default RetryState;
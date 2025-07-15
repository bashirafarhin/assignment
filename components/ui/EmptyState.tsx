// components/ui/EmptyState.tsx
"use client";

import { useTranslation } from "react-i18next";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface EmptyStateProps {
  message?: string;
  buttonLabel?: string;
  redirectTo?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  buttonLabel,
  redirectTo = "/",
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center text-center space-y-4">
      <p className="text-text text-lg">{message || t("emptyMessage")}</p>
      <Button onClick={() => router.push(redirectTo)}>
        {buttonLabel || t("browseMore")}
      </Button>
    </div>
  );
};

export default EmptyState;
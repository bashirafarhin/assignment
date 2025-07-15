'use client';

import Link from 'next/link';
import { useTranslation } from "react-i18next";

const Logo = () => {

  const { t } = useTranslation();

  return (
    <div className="text-2xl font-bold px-2 py-1 rounded-md bg-surface text-text hover:bg-hover transition-colors duration-300 cursor-pointer">
      <Link href="/"><i>{t("Trendify")}</i></Link>
    </div>
  );
};

export default Logo;
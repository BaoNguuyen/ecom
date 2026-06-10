"use client";

import useTheme from '@/src/hooks/use-theme';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  const { toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold">
        {t('title')}
      </h1>

      <p className="text-zinc-500">
        {t('description')}
      </p>

      <div className="bg-background text-foreground">
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-muted-foreground">Subtitle</p>
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded"
            onClick={() => toggleTheme()}
          >
            Click me
          </button>
        </div>
      </div>

      <div className="bg-primary/20 text-primary">
        Light tint
      </div>
    </div>
  );
} 
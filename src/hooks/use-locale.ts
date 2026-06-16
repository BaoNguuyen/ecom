"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";

export function useLocaleSwitch() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const [isPending, startTransition] = useTransition();

    const switchLocale = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, {
                locale: newLocale,
            });
        });
    };

    return {
        currentLocale,
        switchLocale,
        isPending,
    };
}
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    const currentLocale = locale || 'vi';

    return {
        locale: currentLocale,
        messages: (await import(`../messages/${currentLocale}.json`)).default,
    };
});

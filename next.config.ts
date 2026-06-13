import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
                condition: {
                    any: [
                        { path: "**/src/assets/icons/**/*.svg" },
                        { path: "**/assets/icons/**/*.svg" },
                    ],
                },
            },
        },
    },
    webpack(config) {
        // Find the existing rule that handles SVG exports
        const fileLoaderRule = config.module.rules.find((rule: any) =>
            rule.test?.test?.(".svg")
        );

        if (fileLoaderRule) {
            // Exclude our icons folder from the standard loader
            const originalExclude = fileLoaderRule.exclude;
            fileLoaderRule.exclude = (filePath: string) => {
                const normalizedPath = filePath.replace(/\\/g, "/");
                if (normalizedPath.includes("src/assets/icons")) {
                    return true;
                }
                if (typeof originalExclude === "function") {
                    return originalExclude(filePath);
                } else if (originalExclude instanceof RegExp) {
                    return originalExclude.test(filePath);
                }
                return false;
            };
        }

        // Push our new rule specifically for src/assets/icons
        config.module.rules.push({
            test: /\.svg$/i,
            include: path.resolve(__dirname, "src/assets/icons"),
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        icon: true,
                    },
                },
            ],
        });

        return config;
    },
};

export default withNextIntl(nextConfig);
/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = "Mina-Joseph-Portfolio";
const basePath = isGithubActions ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: isGithubActions ? `/${repo}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

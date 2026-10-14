import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repoName;
const isUserPagesRepo = repoName?.endsWith(".github.io");
const githubPagesBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGithubPagesBuild && !isUserPagesRepo ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: githubPagesBasePath,
  // next/image does not prepend basePath to absolute src values, so expose
  // it for lib/asset-path.ts to use on the project-site deployment.
  env: { NEXT_PUBLIC_BASE_PATH: githubPagesBasePath },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;

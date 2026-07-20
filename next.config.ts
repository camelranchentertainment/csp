import type { NextConfig } from "next";

// When building inside GitHub Actions, GITHUB_REPOSITORY is set to
// "owner/repo". A user/org Pages site (repo named "owner.github.io")
// deploys at the domain root and needs no basePath. Any other repo is a
// *project* Pages site and is served from /repo-name/, so basePath and
// assetPrefix must match or every asset link will 404.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPage = repo?.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repo && !isUserOrOrgPage
    ? `/${repo}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;

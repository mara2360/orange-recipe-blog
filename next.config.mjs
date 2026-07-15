const isGitHubPages = process.env.GITHUB_ACTIONS === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/orange-recipe-blog" : "",
  assetPrefix: isGitHubPages ? "/orange-recipe-blog/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

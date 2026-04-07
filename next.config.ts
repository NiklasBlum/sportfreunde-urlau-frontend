import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Legacy PHP URLs — redirect to their Next.js equivalents
      { source: "/index.php", destination: "/", permanent: true },
      {
        source: "/index.php/tischtennis.html",
        destination: "/abteilungen/tischtennis",
        permanent: true,
      },
      {
        source: "/index.php/MTB-Ladies.html",
        destination: "/abteilungen/radsport-damen",
        permanent: true,
      },
      {
        source: "/index.php/vfb.html",
        destination: "/abteilungen/radsport-herren",
        permanent: true,
      },
      {
        source: "/index.php/abteilungen.html",
        destination: "/#abteilungen",
        permanent: true,
      },
      {
        source: "/index.php/termine.html",
        destination: "/veranstaltungen",
        permanent: true,
      },
      {
        source: "/index.php/mittwochsmaedels.html",
        destination: "/abteilungen/mittwochs-maedels",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@OmarShaikh7",
        permanent: true,
      },
    ];
  },
};

export default config;

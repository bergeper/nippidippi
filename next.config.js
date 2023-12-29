/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["www.estrella.se", "www.olw.se"], // Add your domain here
  },
};

export default config;

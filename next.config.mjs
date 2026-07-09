import { withContentCollections } from '@content-collections/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
  // ONLY add this if your site is NOT at the main domain root
  // basePath: '/repository-name', 
};

export default withContentCollections(nextConfig);


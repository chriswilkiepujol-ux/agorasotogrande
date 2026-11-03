/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old WordPress canonicals all end in "/", so the new site keeps that shape exactly.
  trailingSlash: true,
  images: { remotePatterns: [{ protocol: 'https', hostname: 'agorasotogrande.com' }, { protocol: 'https', hostname: 'i0.wp.com' }, { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' }], formats: ['image/webp'], minimumCacheTTL: 2592000 },

  // English is the default language and lives at the root. Pages are prerendered under
  // /en/… and the root is rewritten to them, so /about/ serves /en/about/ without a redirect.
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/en' },
        { source: '/:path((?!en$|en/|es$|es/|api/|_next/|sitemap\\.xml|robots\\.txt|favicon\\.ico|.*\\..*).*)', destination: '/en/:path' },
      ],
    };
  },

  // Redirect map — see docs/url-architecture.md. Every old URL gets exactly one 301, straight to its destination.
  async redirects() {
    const home = (source) => ({ source, destination: '/', statusCode: 301 });
    return [
      // /en/ must never exist publicly as a duplicate of the root.
      { source: '/en', destination: '/', statusCode: 301 },
      { source: '/en/:path*', destination: '/:path*/', statusCode: 301 },

      // The four real pages keep their URLs (no redirect). Everything else from WordPress:
      home('/2641-2'),
      home('/2022/:path*'),
      home('/category/:path*'),
      { source: '/author/:path*', destination: '/about/', statusCode: 301 },

      // Yoast sitemap names Google already knows
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', statusCode: 301 },
      { source: '/:name-sitemap.xml', destination: '/sitemap.xml', statusCode: 301 },
      { source: '/news-sitemap.xml', destination: '/sitemap.xml', statusCode: 301 },
      { source: '/wp-sitemap.xml', destination: '/sitemap.xml', statusCode: 301 },

      // Dead WordPress endpoints
      home('/wp-json/:path*'),
      home('/wp-admin/:path*'),
      home('/wp-login.php'),
      home('/xmlrpc.php'),
      home('/feed'),
      home('/:path*/feed'),
      home('/comments/feed'),
    ];
  },
};
export default nextConfig;

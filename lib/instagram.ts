/* Latest posts from @agorasotogrande via the Instagram API (Instagram Login flavour).
   Needs INSTAGRAM_TOKEN (a long-lived user token for the professional account) in the Vercel env.
   The page is statically rendered and revalidated every hour, so Instagram is hit at most ~24 times a day,
   never per visitor. With no token (or on any error) the caller falls back to our own photos. */

export type IgPost = {
  id: string;
  permalink: string;
  caption?: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  imageUrl: string; // media_url for images, thumbnail_url for videos
  timestamp: string;
};

const FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';

export async function getInstagramPosts(limit = 6): Promise<IgPost[]> {
  const token = process.env.INSTAGRAM_TOKEN;
  if (!token) return [];
  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=${limit + 2}&access_token=${token}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    const json = (await res.json()) as { data?: any[] };
    return (json.data ?? [])
      .map((m): IgPost | null => {
        const imageUrl = m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url;
        if (!imageUrl) return null;
        return { id: m.id, permalink: m.permalink, caption: m.caption, mediaType: m.media_type, imageUrl, timestamp: m.timestamp };
      })
      .filter((p): p is IgPost => !!p)
      .slice(0, limit);
  } catch {
    return [];
  }
}

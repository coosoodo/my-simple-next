import fs from 'fs';
import path from 'path';
import type { MetadataRoute } from 'next';
import { BOARD_CATEGORY_IDS } from '@/lib/boards';
import { getPages } from '@/lib/manual-utils';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sageline.co.kr';

/** 설명서 본문 페이지 목록. /manual 은 제품 선택 페이지라 본문 링크를 담지 않으므로 직접 넣는다. */
function manualRoutes(file: string, basePath: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'src/content', file), 'utf8');
  return getPages(raw).map((p) => `${basePath}/${p.slug}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/privacy', '/terms', '/manual', '/manual-lite'];
  const boardRoutes = BOARD_CATEGORY_IDS.map((id) => `/boards/${id}`);
  const manualPages = [
    ...manualRoutes('manual.md', '/manual'),
    ...manualRoutes('manual-lite.md', '/manual-lite'),
  ];

  return [...staticRoutes, ...boardRoutes, ...manualPages].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route.startsWith('/boards') ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}

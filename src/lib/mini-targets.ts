/** Where the button of a mini-simulator leads: the first page carrying the full calculator of that kind; the
 *  airline fee comparison (kind `all`) lives on the home page. */
import { ROUTES, route } from '../i18n/routes';
import { pageOfTool } from './pages';
export const miniHref = (kind: string, fallback: string) => {
  if (kind === 'all') return `${route('home', 'en')}#calculator`;
  const id = pageOfTool(kind);
  return id && ROUTES.some((r) => r.id === id) ? route(id, 'en') : fallback;
};

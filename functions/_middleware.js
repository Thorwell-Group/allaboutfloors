/**
 * Canonical host enforcement: allaboutfloorsnw.com -> www.allaboutfloorsnw.com
 *
 * public/_redirects has carried an apex -> www rule for a long time, but it has
 * never done anything: Cloudflare Pages _redirects cannot match on hostname, so
 * the rule is inert and the apex kept answering 200 with a full copy of the
 * site. Checked live 2026-09-20 — apex 200, www 200, every canonical naming www.
 * A 301 consolidates the two hosts.
 *
 * Only the exact apex host is touched (never www, never *.pages.dev previews),
 * and any unexpected failure falls through to normal static serving, so a bug
 * here cannot take the site down. Same fix as highmark-flooring and
 * good-ol-boy-hardwood-floors.
 */

const APEX = 'allaboutfloorsnw.com';
const CANONICAL_ORIGIN = 'https://www.allaboutfloorsnw.com';

export async function onRequest(context) {
  try {
    const url = new URL(context.request.url);
    if (url.hostname.toLowerCase() === APEX) {
      return Response.redirect(CANONICAL_ORIGIN + url.pathname + url.search, 301);
    }
  } catch {
    // Fall through to normal serving on any unexpected failure.
  }
  return context.next();
}

/**
 * FAQPage JSON-LD for a list of questions that is rendered on the page by
 * <FAQ items={...} />. Only pass the same array the page actually shows —
 * FAQ markup for questions a visitor cannot see is against Google's rules.
 */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

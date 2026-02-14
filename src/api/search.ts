const BASE_URL = 'https://search.betashares.services/search';

export async function fetchSearch(payload: Record<string, unknown>) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error('Search request failed');
  return response.json();
}

export const apiFetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const headers = new Headers(init?.headers);
  headers.set("Content-Type", "application/json");

  return fetch(input, {
    ...init,
    headers,
    credentials: "include",
  });
};

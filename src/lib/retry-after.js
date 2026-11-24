// Retry-After may be a delay in seconds or an HTTP date. When a provider
// omits it, 60 seconds is our minimum backoff, not a promised recovery time.
export function retryAfterSeconds(value, now = Date.now()) {
  if (typeof value !== 'string' || !value.trim()) return 60;
  const text = value.trim();
  if (/^\d+$/.test(text)) {
    const seconds = Number(text);
    if (Number.isSafeInteger(seconds) && seconds <= Number.MAX_SAFE_INTEGER / 1000) return Math.max(1, seconds);
    return 60;
  }
  const date = /^[A-Za-z]{3}, /.test(text) ? Date.parse(text) : NaN;
  return Number.isFinite(date) ? Math.max(1, Math.ceil((date - now) / 1000)) : 60;
}

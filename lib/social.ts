const PLACEHOLDER_VALUES = new Set(["", "n/a", "none", ".."]);

export function isRealSocialLink(value: string | undefined | null): value is string {
  if (!value) return false;
  return !PLACEHOLDER_VALUES.has(value.trim().toLowerCase());
}

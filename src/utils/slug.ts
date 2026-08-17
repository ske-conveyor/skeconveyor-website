// Converts a product name into the filename we expect in /public/images/products/...
// e.g. "Reciprocating Vertical Lifter" -> "reciprocating-vertical-lifter"
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

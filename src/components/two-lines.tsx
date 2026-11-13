/** Judul dua baris dari pasangan teks di site.ts. */
export function TwoLines({ lines }: { lines: readonly [string, string] }) {
  return (
    <>
      {lines[0]}
      <br />
      {lines[1]}
    </>
  );
}

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div style={{ marginBottom: 12 }}>
      <h2 style={{ marginBottom: 6, color: "#0f2b56" }}>{title}</h2>
      {subtitle ? <p style={{ marginTop: 0, color: "#44526a" }}>{subtitle}</p> : null}
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  items: string[];
};

export function DashboardCard({ title, items }: DashboardCardProps) {
  return (
    <article
      style={{
        background: "white",
        borderRadius: 12,
        padding: 16,
        border: "1px solid #dce4f1",
        boxShadow: "0 1px 3px rgba(15, 35, 70, 0.08)"
      }}
    >
      <h3 style={{ marginTop: 0, color: "#0f2b56" }}>{title}</h3>
      <ul style={{ marginBottom: 0, paddingLeft: 18 }}>
        {items.map((item) => (
          <li key={item} style={{ marginBottom: 6 }}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

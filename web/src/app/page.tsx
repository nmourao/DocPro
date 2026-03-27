import { DashboardCard } from "../components/DashboardCard";
import { SectionTitle } from "../components/SectionTitle";
import { mockDashboard } from "../lib/mock-data";

export default function HomePage() {
  return (
    <main style={{ background: "#f5f7fb", minHeight: "100vh", color: "#1d2636", fontFamily: "Inter, sans-serif" }}>
      <header style={{ background: "#0e1f3d", color: "white", padding: "20px 28px" }}>
        <h1 style={{ margin: 0, fontSize: "1.8rem" }}>Life Admin</h1>
        <p style={{ marginTop: 8, opacity: 0.85 }}>Your life, organized in one place.</p>
      </header>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
        <SectionTitle title="Dashboard" subtitle="Overview of your essential life administration" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          <DashboardCard title="Upcoming Deadlines" items={mockDashboard.upcomingDeadlines} />
          <DashboardCard title="Expiring Documents" items={mockDashboard.expiringDocuments} />
          <DashboardCard title="Bills To Pay" items={mockDashboard.billsToPay} />
          <DashboardCard title="Active Subscriptions" items={mockDashboard.activeSubscriptions} />
          <DashboardCard title="Recent Uploads" items={mockDashboard.recentUploads} />
          <DashboardCard title="Alerts & Reminders" items={mockDashboard.alerts} />
          <DashboardCard title="Asset Summary" items={mockDashboard.assetSummary} />
        </div>

        <section style={{ marginTop: 28, background: "white", borderRadius: 12, padding: 16, border: "1px solid #dce4f1" }}>
          <SectionTitle title="AI Assistant" subtitle="Personal admin insights and proactive guidance" />
          <ul>
            <li>Missing document detection</li>
            <li>Expiry warnings</li>
            <li>Subscription optimization suggestions</li>
            <li>Natural language Q&A for life records</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

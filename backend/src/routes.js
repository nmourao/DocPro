const mockDashboard = {
  upcomingDeadlines: ["Tax filing - Apr 10", "Insurance renewal - Apr 14"],
  expiringDocuments: ["Passport - 42 days", "Vehicle policy - 18 days"],
  billsToPay: ["Mortgage - €980", "Electricity - €88"],
  activeSubscriptions: ["Streaming Plus", "Cloud Backup", "Gym"],
  recentUploads: ["Property deed.pdf", "Insurance policy.pdf"],
  alerts: ["Driver license expires in 83 days"],
  assetSummary: ["Properties: 1", "Vehicles: 2", "Accounts: 4"]
};

export function registerRoutes(app) {
  app.get("/health", (_req, res) => res.json({ ok: true }));

  app.get("/dashboard", (_req, res) => {
    res.json(mockDashboard);
  });

  app.get("/ai/insights", (_req, res) => {
    res.json({
      missing: ["Upload your latest tax return", "Attach renewed home insurance contract"],
      expiring: ["Passport expires in 42 days"],
      suggestions: ["Group warranties under one folder", "Review unused subscriptions"]
    });
  });
}

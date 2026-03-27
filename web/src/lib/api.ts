export type ApiDocument = {
  id: string;
  title: string;
  category:
    | "identification"
    | "tax"
    | "insurance"
    | "property"
    | "vehicle"
    | "contract"
    | "warranty"
    | "medical"
    | "education"
    | "family"
    | "other";
  issueDate?: string;
  expiryDate?: string;
  reminderDaysBeforeExpiry: number;
  notes?: string;
  fileUrl: string;
  tags: string[];
};

export async function fetchDashboard() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard`);
  if (!response.ok) throw new Error("Failed to load dashboard");
  return response.json();
}

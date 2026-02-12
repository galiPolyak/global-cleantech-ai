import DashboardClient from "./DashboardClient";

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { prompt?: string };
}) {
  return <DashboardClient initialPrompt={searchParams?.prompt} />;
}

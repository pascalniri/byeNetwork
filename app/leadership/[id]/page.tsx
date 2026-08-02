import leaders from "@/lib/leaders";
import LeaderDetailView from "./LeaderDetailView";

export function generateStaticParams() {
  return leaders.map((leader) => ({ id: leader.id }));
}

export default async function LeaderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const leader = leaders.find((l) => l.id === id) ?? null;

  return <LeaderDetailView leader={leader} />;
}

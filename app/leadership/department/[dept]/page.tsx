import { notFound } from "next/navigation";
import { departments } from "@/lib/departments";
import LeadershipDirectory from "@/components/leadership/LeadershipDirectory";

export function generateStaticParams() {
  return departments.map((dept) => ({ dept: dept.id }));
}

export default async function LeadershipDepartmentPage({
  params,
}: {
  params: Promise<{ dept: string }>;
}) {
  const { dept } = await params;
  if (!departments.some((d) => d.id === dept)) notFound();

  return <LeadershipDirectory activeRole={dept} />;
}

import { FC } from "react";
import type { Metadata } from "next";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import RequestApiKey from "@/components/RequestApiKey";
import ApiDashboard from "@/components/ApiDashboard";

export const metadata: Metadata = {
  title: "React Finance API | Dashboard",
  description: "Free & open source finance API",
};
const page = async () => {
  const session = await auth();
  if (!session?.user) return notFound();
  const { user } = session;
  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.id, enabled: true },
  });
  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
    </div>
  );
};

export default page;

import React from "react";
import { lusitana } from "../../ui/fonts";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import Cards from "../../ui/dashboard/cards";
import { Suspense } from "react";
import {
  RevenueChartSkeleton,
  InvoiceSkeleton,
  CardSkeleton,
} from "@/app/ui/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DashBoard | Acme Dashboard",
};

export default async function page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <Cards />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoiceSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

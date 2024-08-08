import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import React from "react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent >
        <CardTitle className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </CardTitle>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <CardTitle className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;

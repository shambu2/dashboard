"use client";

// import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 36, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 60, fill: "var(--color-safari)" },

  { browser: "other", visitors: 4, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Share",
  },
  chrome: {
    label: "Ads",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Premium",
    color: "hsl(var(--chart-2))",
  },
  
  other: {
    label: "other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
const Revenue = () => {
  return (
    <div className=""> 
      <Card className="flex flex-col pl-10 pr-10 sm:px-4 sm:py-2 border-none">
        <CardHeader className="items-center pb-0">
          <CardTitle>Revenue-Share</CardTitle>
          <CardDescription>January - december </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[220px] [&_.recharts-text]:fill-background"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="visitors" hideLabel />}
              />
              <Pie data={chartData} dataKey="visitors">
                <LabelList
                  dataKey="browser"
                  className="fill-background"
                  stroke="none"
                  fontSize={12}
                  formatter={(value: keyof typeof chartConfig) =>
                    chartConfig[value]?.label
                  }
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
          premium share rose 4.2% this year
          </div>
          {/* <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Revenue;

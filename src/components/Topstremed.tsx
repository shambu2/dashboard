"use client";

// import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Streamed",
  },
  chrome: {
    label: "Too sweet",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Roses",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "espresso",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "APT",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Like that",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const Topstremed = () => {
  return (
    <div>
      <Card className="border-none"> 
        <CardHeader>
          <CardTitle>Top streamed</CardTitle>
          <CardDescription>January - December </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: 2,
              }}
            >
              <YAxis
                dataKey="browser"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
              <XAxis dataKey="visitors" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="visitors" layout="vertical" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending in Latin America for year
          </div>
          <div className="leading-none text-muted-foreground">
            Showing top streamed for last 12 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Topstremed;

"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
  { month: "January", desktop: 8, mobile: 8 },
  { month: "March", desktop: 3, mobile: 2 },
  { month: "May", desktop: 7, mobile: 5 },
  { month: "july", desktop: 9, mobile: 9 },
  { month: "september", desktop: 5, mobile: 8 },
  { month: "nov", desktop: 4, mobile: 7 },
  
];

const chartConfig = {
  desktop: {
    label: "registered",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "active",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
const Usergrowth = () => {
  return (
    <div>
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Growth Chart </CardTitle>
        <CardDescription>January - december </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total user growth for the last 12 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </div>
  );
};

export default Usergrowth;

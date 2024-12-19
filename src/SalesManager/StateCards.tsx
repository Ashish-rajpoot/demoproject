import { Card } from "@/components/ui/card";
import { ReactNode } from "react";
import { FaChartLine, FaHandshake } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
type SingleCard = {
  title: string;
  value: string;
  icon: ReactNode;
};

const StateCards = () => {
  const stats: SingleCard[] = [
    {
      title: "Total Sales",
      value: "$125,000",
      icon: <GrMoney />,
    },
    {
      title: "Deals in Progress",
      value: "45",
      icon: <FaHandshake />,
    },
    {
      title: "Conversion rate",
      value: "67%",
      icon: <FaChartLine />,
    },
  ];
  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-7 gap-6 m-6">
      {stats.map((stat, index) => (
        <SingleStatCard key={index} SingleCard={stat} />
      ))}
    </div>
  );

  function SingleStatCard({ SingleCard }: { SingleCard: SingleCard }) {
    return (
      <Card className="p-4 flex flex-col shadow-none gap-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-slate-600">{SingleCard.title}</span>
          <div className="size-7 rounded-md flex justify-center items-center text-sm bg-primary/25 font-bold text-primary">{SingleCard.icon}</div>
        </div>
        <div className="text-3xl font-bold">{SingleCard.value}</div>
      </Card>
    );
  }
};

export default StateCards;

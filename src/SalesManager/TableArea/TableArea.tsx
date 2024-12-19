import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { useState } from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { PaginationDemo } from "../pagination/pagination";
import { SelectorProvider } from "../SalesContext/SalesContext";

const TableArea = () => {
  const tabItems = [
    { value: "all", label: "All Deals", count: "40" },
    { value: "high", label: "high Priority", count: "20" },
    { value: "medium", label: "Medium Priority", count: "20" },
    { value: "low", label: "low Priority", count: "20" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <Card className="m-6 shadow-none">
      <div className="p-8">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className=" mb-6 w-full "
        >
          <div className="flex justify-between items-center mb-4 max-md:flex-col max-lg:gap-2 max-sm:items-start">
            <TabsList className="h-10 items-center flex max-sm:flex max-sm:flex-col max-sm:h-[132px] max-sm:w-full bg-gray-100 rounded-md px-1">
              {tabItems.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className={`flex items-center gap-2 h-8 rounded-md transition-all duration-500 ${
                    activeTab === tab.value ? " max-sm:w-full" : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab.value)}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`size-5 rounded-full ${
                      activeTab === tab.value ? "text-primary" : "text-gray-500"
                    } text-[11px] `}
                  >
                    {tab.count}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            <Button className="flex items-center gap-2 max-lg:w-full max-sm:mt-4">
              <HiOutlineDocumentDownload className="size-4" />
              <span>Download as CSV</span>
            </Button>
          </div>
          {tabItems.map((item, i) => (
            <TabsContent key={i} value={item.value} className="w-full mt-9">
              {activeTab === item.value && <span>{item.value}</span>}
            </TabsContent>
          ))}
        </Tabs>

        {/* pagination */}
        <SelectorProvider>
          <PaginationDemo />
        </SelectorProvider>
      </div>
    </Card>
  );
};

export default TableArea;

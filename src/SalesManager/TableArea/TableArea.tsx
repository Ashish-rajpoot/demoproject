import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { tableJsonData } from "../data/TableJsonData";
import { createDeleteContext } from "../SalesManagerContext";
import DemoPage from "../table/page";
import { SalesPerson } from "../table/columns";

// const getPriorityLabel = (priority: string) => {
//   if (priority === "High") return "High Priority";
//   if (priority === "Medium") return "Medium Priority";
//   if (priority === "Low") return "Low Priority";
//   return "All Deals"; // Default label for any other priority
// };

// interface acc {
//   value: string;
//   count: number;
//   label: string;
// }
const TableArea = ({searchQuery}:{searchQuery:string}) => {
  const [activeTab, setActiveTab] = useState("All");
  const [dataToDelete, setDataToDelete] = useState<string>("");
  const [tableData, setTableData] = useState<SalesPerson[]>(tableJsonData);
  // const sum = tableJsonData.length;
  // const tabItems = tableJsonData.reduce(
  //   (acc: acc[], tableJsonData) => {
  //     const existingData = acc.find(
  //       (item: acc) => item.value === tableJsonData.priority
  //     );
  //     if (existingData) {
  //       existingData.count += 1;
  //     } else {
  //       acc.push({
  //         value: tableJsonData.priority,
  //         count: 1,
  //         label: getPriorityLabel(tableJsonData.priority),
  //       });
  //     }
  //     // acc.push({  value: "All", label: "All Deals", count: sum} );
  //     return acc;
  //   },
  //   [{ value: "All", label: "All Deals", count: sum }]
  // );
  
  useEffect(() => {
    setTableData( tableData.filter((item) => item.id !== dataToDelete));
  }, [dataToDelete]);

  const tabItems = [
    { value: "All", label: "All Deals", count: tableData.length },
    {
      value: "High",
      label: "high Priority",
      count: tableData.filter((item) => item.priority === "High")?.length,
    },
    {
      value: "Medium",
      label: "Medium Priority",
      count: tableData.filter((item) => item.priority === "Medium")?.length,
    },
    {
      value: "Low",
      label: "low Priority",
      count: tableData.filter((item) => item.priority === "Low")?.length,
    },
  ];

  return (
    <createDeleteContext.Provider value={[dataToDelete, setDataToDelete]}>
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
                      activeTab === tab.value
                        ? " max-sm:w-full"
                        : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`size-5 rounded-full ${
                        activeTab === tab.value
                          ? "text-primary"
                          : "text-gray-500"
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
                <DemoPage priority={activeTab} searchQuery={searchQuery} />
              </TabsContent>
            ))}
          </Tabs>
          {/* pagination */}
          {/* <SelectorProvider>
          <PaginationDemo />
          </SelectorProvider> */}
        </div>
      </Card>
    </createDeleteContext.Provider>
  );
};

export default TableArea;

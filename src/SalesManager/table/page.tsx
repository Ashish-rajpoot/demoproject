import { useEffect, useState } from "react";
import { tableJsonData } from "../data/TableJsonData";
import { SalesPerson, columns } from "./columns";
import { DataTable } from "./data-table";
import { useDeleteContext } from "../SalesManagerContext";


async function getData(priority: string): Promise<SalesPerson[]> {
  const tableData: SalesPerson[] = tableJsonData;
  switch (priority) {
    case "All":
      return tableData;
    case "High":
      return tableData.filter((data) => data.priority === "High");
    case "Medium":
      return tableData.filter((data) => data.priority === "Medium");
    case "Low":
      return tableData.filter((data) => data.priority === "Low");
    default:
      return tableData;
  }
}
async function getFetchedData(priority: string): Promise<SalesPerson[]> {
  const data: SalesPerson[] = await getData(priority);
  return data;
}

export default function DemoPage({ priority,searchQuery }: { priority: string,searchQuery:string }) {
  const [data, setData] = useState<SalesPerson[]>([]);
  const [getDataToDelete, setDataToDelete] = useDeleteContext();
  useEffect(() => {
    console.log(getDataToDelete);
    setData(data.filter((item) => item.id !== getDataToDelete));
  }, [getDataToDelete]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getFetchedData(priority);
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} searchQuery={searchQuery} />
    </div>
  );
}

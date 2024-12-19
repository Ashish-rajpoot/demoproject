import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import RandomIdGenerator from '../app/RandomIdGenerator';

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }


async function getData(): Promise<Payment[]> {
  // Generate an array of 50 Payment objects
  return [...Array(50)].map((_, i) => ({
    id: RandomIdGenerator.generateRandomId(8),  // Unique ID for each item (e.g., "1", "2", "3", ...)
    amount: 100 * (i + 1),  // Example: increasing amount
    status: i % 2 === 0 ? "pending" : "completed",  // Alternating status
    email: `m${i}@example.com`,  // Generate a unique email for each item
  }));
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}



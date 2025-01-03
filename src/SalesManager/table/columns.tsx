"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, MoreHorizontal } from "lucide-react";
import { BiSolidDetail } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { PRIORITY, STATUS } from "../Constants";
import { useDeleteContext } from "../SalesManagerContext";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type SalesPerson = {
  id: string;
  customer_name: string;
  deal_value: number;
  status: string;
  contact_date: string;
  sales_person: string;
  priority: string;
};

const sorting = ({ column, header }: { column: any; header: string }) => {
  return (
    <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {header}
      <ArrowDown
        className={`transition-all duration-500  ${
          column.getIsSorted() === "asc" ? "rotate-[180deg] " : "rotate-0"
        }`}
      />
    </Button>
  );
};

export let salesPersonDataForAction = "";

export const columns: ColumnDef<SalesPerson>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <div className="w-0 hidden"></div>,
    enableSorting: false,
    enableHiding: false,
    enablePinning: false,
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customer_name",
    header: ({ column }) => (
      <div className="capitalize ">
        {sorting({ column, header: "Customer Name" })}
      </div>
    ),
    
    cell: ({ row }) => (
      <div className="capitalize px-3">{row.getValue("customer_name")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <div className="capitalize">{sorting({ column, header: "status" })}</div>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div className="capitalize">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              status === `${STATUS.CLOSED_WON}`
              ? "bg-green-100 text-green-800"
              : status === `${STATUS.IN_PROGRESS}`
              ? "bg-yellow-100 text-yellow-800"
              : status === `${STATUS.PENDING}`
              ? "bg-blue-100 text-blue-800"
              : "bg-red-100 text-red-800"
            }`}
            >
            {row.getValue("status")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "deal_value",
    header: ({ column }) => (
      <div className="capitalize">
        {sorting({ column, header: "Deal Value" })}
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("deal_value"));
      
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      
      return <div className="text-start px-3">{formatted}</div>;
    },
  },
  {
    accessorKey: "contact_date",
    header: ({ column }) => (
      <div className="capitalize">
        {sorting({ column, header: "contact_date" })}
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="capitalize px-3">{row.getValue("contact_date")}</div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "sales_person",
    header: ({ column }) => (
      <div className="capitalize">
        {sorting({ column, header: "sales_person" })}
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="capitalize px-3">{row.getValue("sales_person")}</div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <div className="capitalize">
        {sorting({ column, header: "priority" })}
      </div>
    ),
    cell: ({ row }) => {
      const priority = row.getValue("priority");
      return (
        <div className="capitalize px-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium items-center min-w-full ${
              priority === `${PRIORITY.HIGH}`
              ? "bg-red-100 text-red-800"
              : priority === `${PRIORITY.MEDIUM}`
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
            }`}
            >
            {row.getValue("priority")}
          </span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const [, setDataToDelete] = useDeleteContext();
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
              >
              Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem> */}
            <DropdownMenuItem className="cursor-pointer">
              <BiSolidDetail className="text-green-400" />
              <span>View Deal</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <FaEdit className="text-yellow-400" />
              <span>Edit Deal</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                setDataToDelete(row.getValue("id"));
              }}
              >
              <MdDeleteForever className="text-red-400" />
              <span>Delete Deal</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

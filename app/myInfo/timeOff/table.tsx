"use client";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

type Data = {
  date: string;
  description: string;
  usedDays: number;
  earnedDays: number;
  balance: number;
};

//дата таблицы с макета. Немного измененная для демонстрации сортировки
const data: Data[] = [
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: 0,
    earnedDays: 3,
    balance: 3,
  },
  {
    date: "22/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: -6,
    earnedDays: 0,
    balance: 3,
  },
  {
    date: "21/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: 0,
    earnedDays: 3,
    balance: 3,
  },
  {
    date: "20/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: 0,
    earnedDays: 3,
    balance: 3,
  },
  {
    date: "19/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: -6,
    earnedDays: 0,
    balance: 3,
  },
  {
    date: "20/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: 0,
    earnedDays: 3,
    balance: 3,
  },
];

const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "usedDays",
    header: "Used Days (-)",
  },
  {
    accessorKey: "earnedDays",
    header: "Earned Days (+)",
    cell: ({ row }) => ( <div>{row.getValue("earnedDays") === 0? "" : row.getValue("earnedDays") + ".00"}</div>)
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({row}) => (
        <div>{row.getValue("balance")}.00</div>
    )
  },
];


//по руководству shadcn
export default function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="border-b-2 border-b-indigoLight-500">
      <Table className="font-inter font-medium text-sm text-black">
        <TableHeader className="bg-[#DAE6F2] ">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-black">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="hover:bg-[#DAE6F299] border-b-indigoLight-500 border-b-2 "
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

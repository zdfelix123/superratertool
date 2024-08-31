"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SuperRaterRow, SUPERRATEROW_MAP } from "../common/constants";
import { getRowNumberFromId } from "../common/utils";

interface DatagridProps {
  data: SuperRaterRow[];
}

export const columns: ColumnDef<SuperRaterRow>[] = [
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
  // {
  //   accessorKey: "superRaterName",
  //   header: "Super Rater Name",
  //   cell: ({ row }) => (
  //     <div className="capitalize">{row.getValue("superRaterName")}</div>
  //   ),
  // },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"))

  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount)

  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // }
  {
    accessorKey: "id",
    header: "Row Number",
    cell: ({ row }) => (
      <div className="capitalize">{getRowNumberFromId(row.getValue("id"))}</div>
    ),
  },
  {
    accessorKey: "superRaterName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Super Rater Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("superRaterName")}
      </div>
    ),
  },
  {
    accessorKey: "superRaterLDAP",
    header: "Super Rater LDAP",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("superRaterLDAP")}</div>
    ),
  },
  {
    accessorKey: "baseProject",
    header: "Base Project",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("baseProject")}</div>
    ),
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("project")}</div>
    ),
  },
  {
    accessorKey: "currentTask",
    header: "Current Task",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("currentTask")}</div>
    ),
  },
  {
    accessorKey: "assignedProject",
    header: "Assigned Project",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("assignedProject")}</div>
    ),
  },
  {
    accessorKey: "prodLead",
    header: "Prod Lead",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("prodLead")}</div>
    ),
  },
  {
    accessorKey: "prodLeadLdap",
    header: "Prod Lead Ldap",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("prodLeadLdap")}</div>
    ),
  },
  {
    accessorKey: "pod",
    header: "Pod",
    cell: ({ row }) => <div className="capitalize">{row.getValue("pod")}</div>,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("location")}</div>
    ),
  },
  {
    accessorKey: "globalLogicEmail",
    header: "GlobalLogic Email",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("globalLogicEmail")}</div>
    ),
  },
  {
    accessorKey: "googleEmail",
    header: "Google Email",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("googleEmail")}</div>
    ),
  },
  {
    accessorKey: "onboardingStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Onboarding Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("onboardingStatus")}</div>
    ),
  },
  {
    accessorKey: "highestLevelofEducation",
    header: "Highest Level of Education",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("highestLevelofEducation")}
      </div>
    ),
  },
  {
    accessorKey: "allAssociatedRoles",
    header: "All Associated Roles",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("allAssociatedRoles")}</div>
    ),
  },
  {
    accessorKey: "productionRole",
    header: "Production Role",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("productionRole")}</div>
    ),
  },
  {
    accessorKey: "vendorOnboardedDate",
    header: "Vendor Onboarded Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("vendorOnboardedDate")}</div>
    ),
  },
  {
    accessorKey: "productionReadyDate",
    header: "Production Ready Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("productionReadyDate")}</div>
    ),
  },
  {
    accessorKey: "estDateofProdStart",
    header: "est Date of Prod Start",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("estDateofProdStart")}</div>
    ),
  },
  {
    accessorKey: "releasedfromOnboarding",
    header: "Released from Onboarding",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("releasedfromOnboarding")}</div>
    ),
  },
  {
    accessorKey: "majorAreaofStudy",
    header: "Major Area of Study",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("majorAreaofStudy")}</div>
    ),
  },
  {
    accessorKey: "technicalLanguageSkills",
    header: "Technical Language Skills",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("technicalLanguageSkills")}
      </div>
    ),
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("notes")}</div>
    ),
  },
];

const Datagrid = ({ data }: DatagridProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter base project..."
          value={
            (table.getColumn("baseProject")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("baseProject")?.setFilterValue(event.target.value)
          }
          className="max-w-60 mr-4"
        />
        <Input
          placeholder="Filter project or work type..."
          value={(table.getColumn("project")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("project")?.setFilterValue(event.target.value)
          }
          className="max-w-60 mr-4"
        />
        <Input
          placeholder="Filter Super Rater Name..."
          value={
            (table.getColumn("superRaterName")?.getFilterValue() as string) ??
            ""
          }
          onChange={(event) =>
            table
              .getColumn("superRaterName")
              ?.setFilterValue(event.target.value)
          }
          className="max-w-60"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Datagrid;

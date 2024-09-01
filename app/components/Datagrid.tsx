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
import { SuperRaterRow, SUPERRATEROW_MAP, Cell } from "../common/constants";
import { getRowNumberFromId } from "../common/utils";
import TableEntry from "./TableEntry";

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
    header: ({ column}) => {
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
        <TableEntry
          column={row.getValue("superRaterName") as Cell}
          rowNumber={(row.getValue("superRaterName") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "superRaterLDAP",
    header: "Super Rater LDAP",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("superRaterLDAP") as Cell}
          rowNumber={(row.getValue("superRaterLDAP") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "baseProject",
    header: "Base Project",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("baseProject") as Cell}
          rowNumber={(row.getValue("baseProject") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("project") as Cell}
          rowNumber={(row.getValue("project") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "currentTask",
    header: "Current Task",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("currentTask") as Cell}
          rowNumber={(row.getValue("currentTask") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "assignedProject",
    header: "Assigned Project",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("assignedProject") as Cell}
          rowNumber={(row.getValue("assignedProject") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "prodLead",
    header: "Prod Lead",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("prodLead") as Cell}
          rowNumber={(row.getValue("prodLead") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "prodLeadLdap",
    header: "Prod Lead Ldap",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("prodLeadLdap") as Cell}
          rowNumber={(row.getValue("prodLeadLdap") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "pod",
    header: "Pod",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("pod") as Cell}
          rowNumber={(row.getValue("pod") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("location") as Cell}
          rowNumber={(row.getValue("location") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "globalLogicEmail",
    header: "GlobalLogic Email",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("globalLogicEmail") as Cell}
          rowNumber={(row.getValue("globalLogicEmail") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "googleEmail",
    header: "Google Email",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("googleEmail") as Cell}
          rowNumber={(row.getValue("googleEmail") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "onboardingStatus",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Onboarding Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("onboardingStatus") as Cell}
          rowNumber={(row.getValue("onboardingStatus") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "highestLevelofEducation",
    header: "Highest Level of Education",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("highestLevelofEducation") as Cell}
          rowNumber={(row.getValue("highestLevelofEducation") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "allAssociatedRoles",
    header: "All Associated Roles",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("allAssociatedRoles") as Cell}
          rowNumber={(row.getValue("allAssociatedRoles") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "productionRole",
    header: "Production Role",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("productionRole") as Cell}
          rowNumber={(row.getValue("productionRole") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "vendorOnboardedDate",
    header: "Vendor Onboarded Date",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("vendorOnboardedDate") as Cell}
          rowNumber={(row.getValue("vendorOnboardedDate") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "productionReadyDate",
    header: "Production Ready Date",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("productionReadyDate") as Cell}
          rowNumber={(row.getValue("productionReadyDate") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "estDateofProdStart",
    header: "est Date of Prod Start",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("estDateofProdStart") as Cell}
          rowNumber={(row.getValue("estDateofProdStart") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "releasedfromOnboarding",
    header: "Released from Onboarding",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("releasedfromOnboarding") as Cell}
          rowNumber={(row.getValue("releasedfromOnboarding") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "majorAreaofStudy",
    header: "Major Area of Study",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("majorAreaofStudy") as Cell}
          rowNumber={(row.getValue("majorAreaofStudy") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "technicalLanguageSkills",
    header: "Technical Language Skills",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("technicalLanguageSkills") as Cell}
          rowNumber={(row.getValue("technicalLanguageSkills") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ row }) => (
      <div className="capitalize">
        <TableEntry
          column={row.getValue("notes") as Cell}
          rowNumber={(row.getValue("notes") as Cell).rowNum || 0}
        />
      </div>
    ),
  },
];

const Datagrid = ({ data}: DatagridProps) => {
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
        {/* <Input
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
        /> */}
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

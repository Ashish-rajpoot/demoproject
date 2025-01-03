import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
  } from "@/components/ui/pagination";
  import { useEffect, useMemo } from "react";
  import { useSelectorContext } from "../SalesContext/SalesContext";
  import { SelectScrollable } from "./selectorpage";
  
  export function PaginationDemo() {
    const { page, itemsPerPage, updatePage } = useSelectorContext(); // Access context
    const totalItems = 10000;  // Example: You have 10,000 items
    const totalPages = Math.ceil(totalItems / itemsPerPage);  // Calculate total pages based on items per page
  
    useEffect(() => {
      console.log("Current Page:", page);
      console.log("Items per Page:", itemsPerPage);
    }, [page, itemsPerPage]);
  
    // Function to handle page change
    const handlePageChange = (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        updatePage(newPage); // Update page in context
      }
    };
  
    // Generate a range of visible page numbers around the current page (e.g., 5 pages)
    const visiblePages = useMemo(() => {
      const maxVisiblePages = 3;
      const pages = [];
      let startPage = Math.max(page - Math.floor(maxVisiblePages / 2), 1);
      let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  
      // Adjust the start page if there are not enough pages before it
      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
      }
  
      // Populate the visible page numbers
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
  
      return pages;
    }, [page, totalPages]);
  
    return (
      <div className="flex max-md:flex-col max-md:gap-4 gap-6 justify-center items-center">
        <div className="">{`Selected Page: ${page} / ${totalPages}`}</div>
        <SelectScrollable /> {/* Select items per page */}
        <Pagination className="flex max-md:gap-0">
          <PaginationContent>
            {/* Previous Page */}
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(page - 1)} />
            </PaginationItem>
  
            {/* Pagination Links */}
            {visiblePages[0] > 1 && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(1)}
                >
                  1
                </PaginationLink>
              </PaginationItem>
            )}
            {visiblePages[0] > 2 && <PaginationEllipsis />}
  
            {visiblePages.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  isActive={page === pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}
  
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && <PaginationEllipsis />}
  
            {/* Next Page */}
            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(page + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  }
  
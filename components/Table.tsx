import React from "react";
import {
  useTable,
  useExpanded,
  usePagination,
  useSortBy,
  Cell,
  useRowSelect,
} from "react-table";

const DEFAULT_PAGE_SIZE = 15;

type Table = {
  columns: any[];
  loading?: boolean;
  items: any[];
  totalCount?: number;
  pageCount?: number;
  onFetch?: () => void;
  searchOptions?: { [key: string]: string };
  defaultSearch?: { [key: string]: string };
  defaultFilter?: { [key: string]: string };
  FilterFields?: any;
  tabs?: { [key: string]: string };
  defaultActiveTab?: string;
  rowSelect?: boolean;
  numberOfRowsInShimmer?: number;
  showFooter?: boolean;
  defaultPageSize?: 15 | 30 | 50;
};

export const Table = ({
  columns,
  loading,
  totalCount,
  pageCount,
  onFetch,
  items,
  searchOptions,
  defaultSearch,
  defaultFilter,
  FilterFields,
  tabs,
  defaultActiveTab,
  rowSelect,
  numberOfRowsInShimmer,
  showFooter,
  defaultPageSize,
}: Table) => {
  return <div>Table</div>;
};

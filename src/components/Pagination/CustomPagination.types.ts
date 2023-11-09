export interface PaginationProps {
  id?: string;
  totalItemCount?: number;
  size?: "small" | "default";
  paginationOnChange?: any;
  showQuickJumper?: boolean;
  defaultCurrent?: number;
  pageSize?: number; 
  onChange?: any
}

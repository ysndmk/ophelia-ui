import React from "react";
import { StyledPagination } from "./CustomPagination.styled";
import { Pagination } from "antd";
import { PaginationProps } from "./CustomPagination.types";

const CustomPagination = ({
  totalItemCount,
  id,
  size,
  paginationOnChange,
  showQuickJumper,
  defaultCurrent,
  pageSize,
  ...props
}: PaginationProps) => {
  return (
    <StyledPagination>
      <Pagination
        id={id}
        defaultCurrent={defaultCurrent}
        showQuickJumper={showQuickJumper}
        size={size}
        pageSize={pageSize}
        total={totalItemCount}
        onChange={paginationOnChange}
        {...props}
      />
    </StyledPagination>
  );
};

export default CustomPagination;

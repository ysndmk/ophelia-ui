import React from "react";
import { StyledPagination } from "./CustomPagination.styled";
import { Pagination } from "antd";
import { PaginationProps } from "./CustomPagination.types";

const CustomPagination = ({
  totalItemCount,
  paginationOnChange,
  showSizeChanger,
  current,
  pageSize,
  ...props
}: PaginationProps) => {
  return (
    <StyledPagination>
      <Pagination
        pageSize={pageSize || 16}
        current={current || 1}
        total={totalItemCount}
        onChange={paginationOnChange}
        showSizeChanger={showSizeChanger}
        {...props}
      />
    </StyledPagination>
  );
};

export default CustomPagination;

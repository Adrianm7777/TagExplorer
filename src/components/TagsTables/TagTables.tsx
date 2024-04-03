import Form from "react-bootstrap/Form";
import { useGetTagsDataQuery } from "../../services/slices/tags/tags";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import TableComponent from "../table/TableComponent";
import { Container, Row } from "react-bootstrap";

const TagTables = () => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"popular" | "activity" | "name">(
    "popular"
  );

  const [order, setOrder] = useState<"desc" | "asc">("asc");

  const {
    data: tagsData,
    isLoading,
    error,
  } = useGetTagsDataQuery({
    pagesize: pageSize.toString(),
    page: page.toString(),
    sort: sortOrder,
    order: order,
  });

  const handleChangePage = (shift: number) => {
    setPage((prevState) => prevState + shift);
  };

  const handleSetPage = (pageValue: number) => {
    setPage(pageValue);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);

    if (newValue > 100) {
      setPageSize(100);
    } else if (newValue < 1) {
      setPageSize(1);
    } else {
      setPageSize(newValue);
    }
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as "popular" | "activity" | "name");
  };
  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value as "desc" | "asc");
  };

  return (
    <Container fluid className="d-flex flex-column m-0 p-0 gap-5">
      <Row className="d-flex justify-content-center gap-5">
        <input
          className="col-3 col-sm-2"
          type="number"
          value={pageSize}
          onChange={handlePageSizeChange}
        />
        <Form.Select
          className="col-12 col-sm-6"
          aria-label="Default select example"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="popular">popular</option>
          <option value="activity">activity</option>
          <option value="name">name</option>
        </Form.Select>
        <Form.Select
          className="col-12 col-sm-6"
          aria-label="Default select example"
          value={order}
          onChange={handleOrderChange}
        >
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </Form.Select>
      </Row>
      <TableComponent tagsData={tagsData} error={error} isLoading={isLoading} />
      <Pagination className="d-flex justify-content-center w-100">
        <Pagination.First className="w-25" onClick={() => handleSetPage(1)} />
        <Pagination.Prev
          className="w-25"
          onClick={() => handleChangePage(-1)}
        />
        {page < 25 && (
          <Pagination.Next
            className="w-25"
            onClick={() => handleChangePage(1)}
          />
        )}
        <Pagination.Last className="w-25" onClick={() => handleSetPage(25)} />
        {/* page above 25 requires access token or app key */}
      </Pagination>
    </Container>
  );
};

export default TagTables;

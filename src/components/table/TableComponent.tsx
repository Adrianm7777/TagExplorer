import Table from "react-bootstrap/Table";
import Loader from "../../reuseable/loader/Loader";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { findErrorByStatusCode } from "../../helpers/findErrorByStatusCode";

interface Props {
  tagsData?: TagsDataResponse;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
}

const TableComponent = ({ tagsData, error, isLoading }: Props) => {
  if (error) {
    let errorMessage = "An unknown error occurred";

    if (
      "status" in error &&
      "data" in error &&
      typeof error.data !== "string"
    ) {
      const foundError = findErrorByStatusCode(error.data?.error_id);

      if (foundError) {
        errorMessage = foundError.description;
      } else if (error.data) {
        errorMessage = error.data?.error_message;
      }

      return <p>{errorMessage}</p>;
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {tagsData?.items?.map(({ count, name }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;

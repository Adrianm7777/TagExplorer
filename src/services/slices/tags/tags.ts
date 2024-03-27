import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tags } from "../../endpoints";

interface TagDataProps {
  page?: string;
  todate?: string;
  max?: string;
  pagesize?: string;
  order?: "desc" | "asc";
  sort?: "popular" | "activity" | "name";
  fromdate?: string;
  min?: string;
  inname?: string;
  site?: string;
}

export const tagApi = createApi({
  reducerPath: "tagApi",
  baseQuery: fetchBaseQuery({ baseUrl: tags }),
  endpoints: (builder) => ({
    getTagsData: builder.query<TagsDataResponse, TagDataProps>({
      query: ({
        page,
        todate,
        max,
        pagesize,
        order,
        sort,
        fromdate,
        min,
        inname,
        site = "stackoverflow",
      }) => {
        const params = new URLSearchParams({
          ...(page && { page }),
          ...(todate && { todate }),
          ...(max && { max }),
          ...(pagesize && { pagesize }),
          ...(order && { order }),
          ...(sort && { sort }),
          ...(fromdate && { fromdate }),
          ...(min && { min }),
          ...(inname && { inname }),
          ...(site && { site }),
        });
        return {
          url: `?${params.toString()}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetTagsDataQuery } = tagApi;

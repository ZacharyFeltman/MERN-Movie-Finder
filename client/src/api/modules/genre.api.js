import publicClient from "../client/public.client";

const genreEndpoints = {
  list: ({ mediaType }) => `${mediaType}/genres`,
};

const genreApi = {
  getList: async ({ mediaType }) => {
    try {
      const response = await publicClient.list(
        genreEndpoints.list({ mediaType })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default genreApi;

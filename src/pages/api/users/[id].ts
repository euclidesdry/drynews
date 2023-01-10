import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log("API request: ", request.query);

  const users = [
    { id: 1, name: "DRY C" },
    { id: 2, name: "Peixe Fresco" },
  ];

  return response.json(users);
};

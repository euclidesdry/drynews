import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (_request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "DRY C" },
    { id: 2, name: "Peixe Fresco" },
  ];

  return response.json(users);
};

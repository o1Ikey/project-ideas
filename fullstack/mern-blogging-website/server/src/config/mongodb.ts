import { Db, MongoClient, ServerApiVersion } from "mongodb";
import { env } from "./environment";
import { Maybe } from "../types/utilities";

let database: Maybe<Db> = null;

export const connectToDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  // Connect to mongodb cluster
  await client.connect();

  // Assign client to the server
  database = client.db(env.DATABASE_NAME);
  // console.log(database, "database");
  // const boards = database.collection("boards");
  // console.log(boards, "boards");

  // await listDb(client);
};

export const getDatabase = () => {
  if (!database) throw new Error("Must connect to DB first");
  return database;
};

// const listDb = async (client: MongoClient) => {
//   const admin = client.db().admin();
//   const dbInfo = await admin.listDatabases();
//   for (const db of dbInfo.databases) {
//     console.log(db.name);
//   }
// };

import { GraphQLObjectType } from "graphql";

import block from "./models/block/blockQuery";
import transaction from "./models/transaction/transactionQuery";

export default new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...block,
    ...transaction
  })
});
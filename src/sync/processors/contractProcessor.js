import _ from "lodash";

import { Contract } from "../../server/database";

export default class ContractProcessor {
  process = async (transaction, block, options = {}) => {
    const { contract } = transaction;
    const attrs = _.pick(contract, "name", "version", "code", "needstorage", "author", "email",
      "description");

    return Contract.create({
      ...attrs,
      txid: transaction.txid,
      registered: block.time * 1000,
      hash: contract.code.hash
    }, options);
  }
}

// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(tableName, entries) {
  // [START bigtable_v2_generated_Bigtable_MutateRows_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The unique name of the table to which the mutations should be applied.
   */
  // const tableName = 'abc123'
  /**
   *  This value specifies routing for replication. If not specified, the
   *  "default" application profile will be used.
   */
  // const appProfileId = 'abc123'
  /**
   *  Required. The row keys and corresponding mutations to be applied in bulk.
   *  Each entry is applied as an atomic mutation, but the entries may be
   *  applied in arbitrary order (even between entries for the same row).
   *  At least one entry must be specified, and in total the entries can
   *  contain at most 100000 mutations.
   */
  // const entries = 1234

  // Imports the Bigtable library
  const {BigtableClient} = require('@google-cloud/bigtable').v2;

  // Instantiates a client
  const bigtableClient = new BigtableClient();

  async function callMutateRows() {
    // Construct request
    const request = {
      tableName,
      entries,
    };

    // Run request
    const stream = await bigtableClient.mutateRows(request);
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
  }

  callMutateRows();
  // [END bigtable_v2_generated_Bigtable_MutateRows_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

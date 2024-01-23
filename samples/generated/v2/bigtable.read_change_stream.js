// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **


 /**
 * NOTE: This sample is autogenerated, but this library contains handwritten
 * samples that are the recommended way to use this library. Please refer to
 * samples outside of the generated/ folder for these recommendations.
 */ 
'use strict';

function main(tableName) {
  // [START bigtable_v2_generated_Bigtable_ReadChangeStream_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The unique name of the table from which to read a change stream.
   *  Values are of the form
   *  `projects/<project>/instances/<instance>/tables/<table>`.
   *  Change streaming must be enabled on the table.
   */
  // const tableName = 'abc123'
  /**
   *  This value specifies routing for replication. If not specified, the
   *  "default" application profile will be used.
   *  Single cluster routing must be configured on the profile.
   */
  // const appProfileId = 'abc123'
  /**
   *  The partition to read changes from.
   */
  // const partition = {}
  /**
   *  Start reading the stream at the specified timestamp. This timestamp must
   *  be within the change stream retention period, less than or equal to the
   *  current time, and after change stream creation, whichever is greater.
   *  This value is inclusive and will be truncated to microsecond granularity.
   */
  // const startTime = {}
  /**
   *  Tokens that describe how to resume reading a stream where reading
   *  previously left off. If specified, changes will be read starting at the
   *  the position. Tokens are delivered on the stream as part of `Heartbeat`
   *  and `CloseStream` messages.
   *  If a single token is provided, the token’s partition must exactly match
   *  the request’s partition. If multiple tokens are provided, as in the case
   *  of a partition merge, the union of the token partitions must exactly
   *  cover the request’s partition. Otherwise, INVALID_ARGUMENT will be
   *  returned.
   */
  // const continuationTokens = {}
  /**
   *  If specified, OK will be returned when the stream advances beyond
   *  this time. Otherwise, changes will be continuously delivered on the stream.
   *  This value is inclusive and will be truncated to microsecond granularity.
   */
  // const endTime = {}
  /**
   *  If specified, the duration between `Heartbeat` messages on the stream.
   *  Otherwise, defaults to 5 seconds.
   */
  // const heartbeatDuration = {}

  // Imports the Bigtable library
  const {BigtableClient} = require('@google-cloud/bigtable').v2;

  // Instantiates a client
  const bigtableClient = new BigtableClient();

  async function callReadChangeStream() {
    // Construct request
    const request = {
      tableName,
    };

    // Run request
    const stream = await bigtableClient.readChangeStream(request);
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
  }

  callReadChangeStream();
  // [END bigtable_v2_generated_Bigtable_ReadChangeStream_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

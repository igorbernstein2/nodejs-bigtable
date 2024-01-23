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



'use strict';

function main(parent, clusterId, cluster) {
  // [START bigtableadmin_v2_generated_BigtableInstanceAdmin_CreateCluster_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The unique name of the instance in which to create the new
   *  cluster. Values are of the form `projects/{project}/instances/{instance}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID to be used when referring to the new cluster within its
   *  instance, e.g., just `mycluster` rather than
   *  `projects/myproject/instances/myinstance/clusters/mycluster`.
   */
  // const clusterId = 'abc123'
  /**
   *  Required. The cluster to be created.
   *  Fields marked `OutputOnly` must be left blank.
   */
  // const cluster = {}

  // Imports the Admin library
  const {BigtableInstanceAdminClient} = require('@google-cloud/bigtable').v2;

  // Instantiates a client
  const adminClient = new BigtableInstanceAdminClient();

  async function callCreateCluster() {
    // Construct request
    const request = {
      parent,
      clusterId,
      cluster,
    };

    // Run request
    const [operation] = await adminClient.createCluster(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateCluster();
  // [END bigtableadmin_v2_generated_BigtableInstanceAdmin_CreateCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

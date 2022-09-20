// Copyright 2022 Google LLC
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

function main(appProfile, updateMask) {
  // [START bigtableadmin_v2_generated_BigtableInstanceAdmin_UpdateAppProfile_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The app profile which will (partially) replace the current value.
   */
  // const appProfile = {}
  /**
   *  Required. The subset of app profile fields which should be replaced.
   *  If unset, all fields will be replaced.
   */
  // const updateMask = {}
  /**
   *  If true, ignore safety checks when updating the app profile.
   */
  // const ignoreWarnings = true

  // Imports the Admin library
  const {BigtableInstanceAdminClient} = require('@google-cloud/bigtable').v2;

  // Instantiates a client
  const adminClient = new BigtableInstanceAdminClient();

  async function callUpdateAppProfile() {
    // Construct request
    const request = {
      appProfile,
      updateMask,
    };

    // Run request
    const [operation] = await adminClient.updateAppProfile(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateAppProfile();
  // [END bigtableadmin_v2_generated_BigtableInstanceAdmin_UpdateAppProfile_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

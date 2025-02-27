
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tcr.v20190924.Client({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-shanghai",
  profile: {
    signMethod: "TC3-HMAC-SHA256",
    httpProfile: {
      reqMethod: "POST",
      reqTimeout: 30,
      endpoint: "cvm.ap-shanghai.tencentcloudapi.com",
    },
  },
})
describe("tcr.v20190924.test.js", function () {

it("tcr.v20190924.ModifyNamespace", async function () {
    try {
       const data = await client.ModifyNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeImageFilterPersonal", async function () {
    try {
       const data = await client.DescribeImageFilterPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeApplicationTriggerPersonal", async function () {
    try {
       const data = await client.DescribeApplicationTriggerPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateImageLifecyclePersonal", async function () {
    try {
       const data = await client.CreateImageLifecyclePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateNamespace", async function () {
    try {
       const data = await client.CreateNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeImagePersonal", async function () {
    try {
       const data = await client.DescribeImagePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeImageLifecyclePersonal", async function () {
    try {
       const data = await client.DescribeImageLifecyclePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeImageLifecycleGlobalPersonal", async function () {
    try {
       const data = await client.DescribeImageLifecycleGlobalPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteInstance", async function () {
    try {
       const data = await client.DeleteInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ModifyApplicationTriggerPersonal", async function () {
    try {
       const data = await client.ModifyApplicationTriggerPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ModifyRepository", async function () {
    try {
       const data = await client.ModifyRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteNamespace", async function () {
    try {
       const data = await client.DeleteNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteRepository", async function () {
    try {
       const data = await client.DeleteRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeRepositories", async function () {
    try {
       const data = await client.DescribeRepositories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ModifyRepositoryInfoPersonal", async function () {
    try {
       const data = await client.ModifyRepositoryInfoPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeWebhookTriggerLog", async function () {
    try {
       const data = await client.DescribeWebhookTriggerLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeImages", async function () {
    try {
       const data = await client.DescribeImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeNamespacePersonal", async function () {
    try {
       const data = await client.DescribeNamespacePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteRepositoryPersonal", async function () {
    try {
       const data = await client.DeleteRepositoryPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeRepositoryPersonal", async function () {
    try {
       const data = await client.DescribeRepositoryPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeImageManifests", async function () {
    try {
       const data = await client.DescribeImageManifests({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeInstanceToken", async function () {
    try {
       const data = await client.DescribeInstanceToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ManageImageLifecycleGlobalPersonal", async function () {
    try {
       const data = await client.ManageImageLifecycleGlobalPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeApplicationTriggerLogPersonal", async function () {
    try {
       const data = await client.DescribeApplicationTriggerLogPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteInstanceToken", async function () {
    try {
       const data = await client.DeleteInstanceToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ModifyUserPasswordPersonal", async function () {
    try {
       const data = await client.ModifyUserPasswordPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteApplicationTriggerPersonal", async function () {
    try {
       const data = await client.DeleteApplicationTriggerPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeWebhookTrigger", async function () {
    try {
       const data = await client.DescribeWebhookTrigger({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteImagePersonal", async function () {
    try {
       const data = await client.DeleteImagePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ManageInternalEndpoint", async function () {
    try {
       const data = await client.ManageInternalEndpoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ModifyWebhookTrigger", async function () {
    try {
       const data = await client.ModifyWebhookTrigger({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ModifyInstanceToken", async function () {
    try {
       const data = await client.ModifyInstanceToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateInstance", async function () {
    try {
       const data = await client.CreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeReplicationInstances", async function () {
    try {
       const data = await client.DescribeReplicationInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateWebhookTrigger", async function () {
    try {
       const data = await client.CreateWebhookTrigger({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateApplicationTriggerPersonal", async function () {
    try {
       const data = await client.CreateApplicationTriggerPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.BatchDeleteRepositoryPersonal", async function () {
    try {
       const data = await client.BatchDeleteRepositoryPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeUserQuotaPersonal", async function () {
    try {
       const data = await client.DescribeUserQuotaPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteWebhookTrigger", async function () {
    try {
       const data = await client.DeleteWebhookTrigger({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeReplicationInstanceCreateTasks", async function () {
    try {
       const data = await client.DescribeReplicationInstanceCreateTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateRepository", async function () {
    try {
       const data = await client.CreateRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeFavorRepositoryPersonal", async function () {
    try {
       const data = await client.DescribeFavorRepositoryPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeRepositoryOwnerPersonal", async function () {
    try {
       const data = await client.DescribeRepositoryOwnerPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeNamespaces", async function () {
    try {
       const data = await client.DescribeNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeInstanceStatus", async function () {
    try {
       const data = await client.DescribeInstanceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateRepositoryPersonal", async function () {
    try {
       const data = await client.CreateRepositoryPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.BatchDeleteImagePersonal", async function () {
    try {
       const data = await client.BatchDeleteImagePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DuplicateImagePersonal", async function () {
    try {
       const data = await client.DuplicateImagePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeRepositoryFilterPersonal", async function () {
    try {
       const data = await client.DescribeRepositoryFilterPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ValidateNamespaceExistPersonal", async function () {
    try {
       const data = await client.ValidateNamespaceExistPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateNamespacePersonal", async function () {
    try {
       const data = await client.CreateNamespacePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateUserPersonal", async function () {
    try {
       const data = await client.CreateUserPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteImageLifecycleGlobalPersonal", async function () {
    try {
       const data = await client.DeleteImageLifecycleGlobalPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteNamespacePersonal", async function () {
    try {
       const data = await client.DeleteNamespacePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ModifyRepositoryAccessPersonal", async function () {
    try {
       const data = await client.ModifyRepositoryAccessPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DescribeInternalEndpoints", async function () {
    try {
       const data = await client.DescribeInternalEndpoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteImageLifecyclePersonal", async function () {
    try {
       const data = await client.DeleteImageLifecyclePersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.ValidateRepositoryExistPersonal", async function () {
    try {
       const data = await client.ValidateRepositoryExistPersonal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.DeleteImage", async function () {
    try {
       const data = await client.DeleteImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcr.v20190924.CreateInstanceToken", async function () {
    try {
       const data = await client.CreateInstanceToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})

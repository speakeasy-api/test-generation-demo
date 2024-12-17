# Users
(*users*)

## Overview

### Available Operations

* [create](#create)

## create

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.users.create({
    id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
    user: {
      id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
      name: "John Doe",
      address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94107",
      },
      age: 30,
      gender: "MALE",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { usersCreate } from "openapi/funcs/usersCreate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await usersCreate(sdk, {
    id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
    user: {
      id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
      name: "John Doe",
      address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94107",
      },
      age: 30,
      gender: "MALE",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUserRequest](../../models/operations/createuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateUserResponseBody](../../models/operations/createuserresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |
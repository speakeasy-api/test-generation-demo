/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersCreate } from "../funcs/usersCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Users extends ClientSDK {
    async create(
        request: operations.CreateUserRequest,
        options?: RequestOptions
    ): Promise<operations.CreateUserResponseBody> {
        return unwrapAsync(usersCreate(this, request, options));
    }
}

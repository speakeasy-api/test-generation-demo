/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { drinksCreate } from "../funcs/drinksCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Drinks extends ClientSDK {
    async create(
        request: operations.CreateDrinkRequest,
        options?: RequestOptions
    ): Promise<operations.CreateDrinkResponseBody> {
        return unwrapAsync(drinksCreate(this, request, options));
    }
}

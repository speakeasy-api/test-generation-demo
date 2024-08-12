/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Drinks } from "./drinks.js";
import { Users } from "./users.js";

export class SDK extends ClientSDK {
    private _users?: Users;
    get users(): Users {
        return (this._users ??= new Users(this.options$));
    }

    private _drinks?: Drinks;
    get drinks(): Drinks {
        return (this._drinks ??= new Drinks(this.options$));
    }
}

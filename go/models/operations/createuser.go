// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"openapi/models/components"
)

type CreateUserRequest struct {
	ID   string          `pathParam:"style=simple,explode=false,name=id"`
	User components.User `request:"mediaType=application/json"`
}

func (o *CreateUserRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *CreateUserRequest) GetUser() components.User {
	if o == nil {
		return components.User{}
	}
	return o.User
}

// CreateUserResponseBody - Success
type CreateUserResponseBody struct {
	JSON components.User `json:"json"`
}

func (o *CreateUserResponseBody) GetJSON() components.User {
	if o == nil {
		return components.User{}
	}
	return o.JSON
}

type CreateUserResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Success
	Object *CreateUserResponseBody
}

func (o *CreateUserResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *CreateUserResponse) GetObject() *CreateUserResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from .drink import Drink, DrinkTypedDict
from openapi.types import BaseModel
from openapi.utils import FieldMetadata, PathParamMetadata, RequestMetadata
import pydantic
from typing_extensions import Annotated, TypedDict


class CreateDrinkRequestTypedDict(TypedDict):
    id: str
    drink: DrinkTypedDict


class CreateDrinkRequest(BaseModel):
    id: Annotated[
        str, FieldMetadata(path=PathParamMetadata(style="simple", explode=False))
    ]

    drink: Annotated[
        Drink, FieldMetadata(request=RequestMetadata(media_type="application/json"))
    ]


class CreateDrinkResponseBodyTypedDict(TypedDict):
    r"""Success"""

    json_: DrinkTypedDict


class CreateDrinkResponseBody(BaseModel):
    r"""Success"""

    json_: Annotated[Drink, pydantic.Field(alias="json")]

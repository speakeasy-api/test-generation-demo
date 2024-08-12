"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from openapi.types import BaseModel
from typing import Literal, TypedDict


Type = Literal["Beer", "Coffee", "Wine"]

class DrinkTypedDict(TypedDict):
    id: str
    type: Type
    price: float
    

class Drink(BaseModel):
    id: str
    type: Type
    price: float
    

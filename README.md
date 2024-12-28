# TypeScript Type Coercion Bug

This repository demonstrates a common issue in TypeScript where type coercion can lead to unexpected runtime errors, even if the code compiles successfully.

## The Problem

TypeScript's type system is flexible, allowing for implicit type coercion in some cases.  While this can be convenient, it can also mask potential runtime errors.

The `add` function is defined to accept two numbers and return their sum. However, in the example provided, the function is called with strings, causing runtime errors.

## The Solution

The best way to prevent this issue is to use stricter type checking and avoid implicit conversions.

The solution demonstrates more rigorous type checking, ensuring that the function is called only with numbers.  This eliminates the possibility of runtime errors due to incorrect input types.
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MPH extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MPH entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MPH entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MPH", id.toString(), this);
  }

  static load(id: string): MPH | null {
    return store.get("MPH", id) as MPH | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }
}

export class xMPH extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save xMPH entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save xMPH entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("xMPH", id.toString(), this);
  }

  static load(id: string): xMPH | null {
    return store.get("xMPH", id) as xMPH | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get pricePerFullShare(): BigDecimal {
    let value = this.get("pricePerFullShare");
    return value.toBigDecimal();
  }

  set pricePerFullShare(value: BigDecimal) {
    this.set("pricePerFullShare", Value.fromBigDecimal(value));
  }
}

export class MPHHolder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MPHHolder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MPHHolder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MPHHolder", id.toString(), this);
  }

  static load(id: string): MPHHolder | null {
    return store.get("MPHHolder", id) as MPHHolder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get mphBalance(): BigDecimal {
    let value = this.get("mphBalance");
    return value.toBigDecimal();
  }

  set mphBalance(value: BigDecimal) {
    this.set("mphBalance", Value.fromBigDecimal(value));
  }

  get xmphBalance(): BigDecimal {
    let value = this.get("xmphBalance");
    return value.toBigDecimal();
  }

  set xmphBalance(value: BigDecimal) {
    this.set("xmphBalance", Value.fromBigDecimal(value));
  }
}

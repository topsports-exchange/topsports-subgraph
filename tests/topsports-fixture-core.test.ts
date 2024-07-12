import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { BetConfirmed } from "../generated/schema"
import { BetConfirmed as BetConfirmedEvent } from "../generated/TopsportsFixtureCore/TopsportsFixtureCore"
import { handleBetConfirmed } from "../src/topsports-fixture-core"
import { createBetConfirmedEvent } from "./topsports-fixture-core-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let fixtureId = Bytes.fromI32(1234567890)
    let maker = Address.fromString("0x0000000000000000000000000000000000000001")
    let taker = Address.fromString("0x0000000000000000000000000000000000000001")
    let amount = BigInt.fromI32(234)
    let takerProfit = BigInt.fromI32(234)
    let newBetConfirmedEvent = createBetConfirmedEvent(
      fixtureId,
      maker,
      taker,
      amount,
      takerProfit
    )
    handleBetConfirmed(newBetConfirmedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BetConfirmed created and stored", () => {
    assert.entityCount("BetConfirmed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BetConfirmed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fixtureId",
      "1234567890"
    )
    assert.fieldEquals(
      "BetConfirmed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "maker",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BetConfirmed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "taker",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BetConfirmed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "BetConfirmed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "takerProfit",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

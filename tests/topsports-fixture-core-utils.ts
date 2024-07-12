import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BetConfirmed,
  FixtureCreated,
  FixtureResolved,
  Initialized,
  PayoutCollected
} from "../generated/TopsportsFixtureCore/TopsportsFixtureCore"

export function createBetConfirmedEvent(
  fixtureId: Bytes,
  maker: Address,
  taker: Address,
  amount: BigInt,
  takerProfit: BigInt
): BetConfirmed {
  let betConfirmedEvent = changetype<BetConfirmed>(newMockEvent())

  betConfirmedEvent.parameters = new Array()

  betConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "fixtureId",
      ethereum.Value.fromFixedBytes(fixtureId)
    )
  )
  betConfirmedEvent.parameters.push(
    new ethereum.EventParam("maker", ethereum.Value.fromAddress(maker))
  )
  betConfirmedEvent.parameters.push(
    new ethereum.EventParam("taker", ethereum.Value.fromAddress(taker))
  )
  betConfirmedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  betConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "takerProfit",
      ethereum.Value.fromUnsignedBigInt(takerProfit)
    )
  )

  return betConfirmedEvent
}

export function createFixtureCreatedEvent(
  startDate: BigInt,
  token: Address,
  consumer: Address
): FixtureCreated {
  let fixtureCreatedEvent = changetype<FixtureCreated>(newMockEvent())

  fixtureCreatedEvent.parameters = new Array()

  fixtureCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startDate",
      ethereum.Value.fromUnsignedBigInt(startDate)
    )
  )
  fixtureCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  fixtureCreatedEvent.parameters.push(
    new ethereum.EventParam("consumer", ethereum.Value.fromAddress(consumer))
  )

  return fixtureCreatedEvent
}

export function createFixtureResolvedEvent(
  fixtureId: Bytes,
  side: i32
): FixtureResolved {
  let fixtureResolvedEvent = changetype<FixtureResolved>(newMockEvent())

  fixtureResolvedEvent.parameters = new Array()

  fixtureResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "fixtureId",
      ethereum.Value.fromFixedBytes(fixtureId)
    )
  )
  fixtureResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "side",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(side))
    )
  )

  return fixtureResolvedEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createPayoutCollectedEvent(
  from: Address,
  to: Address,
  amount: BigInt
): PayoutCollected {
  let payoutCollectedEvent = changetype<PayoutCollected>(newMockEvent())

  payoutCollectedEvent.parameters = new Array()

  payoutCollectedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  payoutCollectedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  payoutCollectedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return payoutCollectedEvent
}

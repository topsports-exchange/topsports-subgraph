import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { InstanceCreated } from "../generated/TopsportsFixtureFactory/TopsportsFixtureFactory"

export function createInstanceCreatedEvent(instance: Address): InstanceCreated {
  let instanceCreatedEvent = changetype<InstanceCreated>(newMockEvent())

  instanceCreatedEvent.parameters = new Array()

  instanceCreatedEvent.parameters.push(
    new ethereum.EventParam("instance", ethereum.Value.fromAddress(instance))
  )

  return instanceCreatedEvent
}

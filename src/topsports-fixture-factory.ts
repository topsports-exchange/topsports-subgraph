import { InstanceCreated as InstanceCreatedEvent } from "../generated/TopsportsFixtureFactory/TopsportsFixtureFactory";
import { InstanceCreated } from "../generated/schema";

export function handleInstanceCreated(event: InstanceCreatedEvent): void {
  let entity = new InstanceCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.instance = event.params.instance;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

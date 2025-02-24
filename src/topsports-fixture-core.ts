import {
  BetConfirmed as BetConfirmedEvent,
  FixtureCreated as FixtureCreatedEvent,
  FixtureResolved as FixtureResolvedEvent,
  Initialized as InitializedEvent,
  PayoutCollected as PayoutCollectedEvent,
} from "../generated/templates/TopsportsFixtureCore/TopsportsFixtureCore";
import {
  BetConfirmed,
  FixtureCreated,
  FixtureResolved,
  Initialized,
  PayoutCollected,
} from "../generated/schema";

export function handleBetConfirmed(event: BetConfirmedEvent): void {
  let entity = new BetConfirmed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.maker = event.params.maker;
  entity.taker = event.params.taker;
  entity.amount = event.params.amount;
  entity.takerProfit = event.params.takerProfit;

  entity.fixture = event.address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleFixtureCreated(event: FixtureCreatedEvent): void {
  let entity = new FixtureCreated(event.address);
  entity.fullId = event.params.fullId;
  entity.startDate = event.params.startDate;
  entity.token = event.params.token;
  entity.consumer = event.params.consumer;

  entity.contract = event.address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleFixtureResolved(event: FixtureResolvedEvent): void {
  let entity = new FixtureResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.side = event.params.side;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.version = event.params.version;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePayoutCollected(event: PayoutCollectedEvent): void {
  let entity = new PayoutCollected(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

import { InstanceCreated as InstanceCreatedEvent } from "../generated/TopsportsFixtureFactory/TopsportsFixtureFactory";
import { TopsportsFixtureCore } from "../generated/templates";

export function handleInstanceCreated(event: InstanceCreatedEvent): void {
  TopsportsFixtureCore.create(event.params.instance);
}

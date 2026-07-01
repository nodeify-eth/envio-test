import { indexer, type GraphNetworkRawEvent } from "envio";

type RawEventInput = {
  chainId: number;
  srcAddress: string;
  logIndex: number;
  params: unknown;
  block: { number: number | bigint; timestamp: number | bigint | string };
  transaction: { hash: string };
};

function stringifyParams(value: unknown): string {
  return JSON.stringify(value, (_key, nested) =>
    typeof nested === "bigint" ? nested.toString() : nested,
  );
}

function rawEvent(contract: string, eventName: string, event: RawEventInput): GraphNetworkRawEvent {
  return {
    id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
    chainId: event.chainId,
    contract,
    eventName,
    srcAddress: event.srcAddress,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.transaction.hash,
    logIndex: event.logIndex,
    params: stringifyParams(event.params),
  };
}

indexer.onEvent(
  { contract: "Controller", event: "SetContractProxy" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("Controller", "SetContractProxy", event));
  },
);

indexer.onEvent(
  { contract: "Controller", event: "NewOwnership" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("Controller", "NewOwnership", event));
  },
);

indexer.onEvent(
  { contract: "Controller", event: "PartialPauseChanged" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("Controller", "PartialPauseChanged", event));
  },
);

indexer.onEvent(
  { contract: "Controller", event: "PauseChanged" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("Controller", "PauseChanged", event));
  },
);

indexer.onEvent(
  { contract: "Controller", event: "NewPauseGuardian" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("Controller", "NewPauseGuardian", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphPublished_1" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphPublished_1", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphDeprecated_1" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphDeprecated_1", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SetDefaultName" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SetDefaultName", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphMetadataUpdated_1" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphMetadataUpdated_1", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NameSignalEnabled" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "NameSignalEnabled", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NameSignalUpgrade" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "NameSignalUpgrade", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NSignalMinted" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "NSignalMinted", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NSignalBurned" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "NSignalBurned", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NameSignalDisabled" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "NameSignalDisabled", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "GRTWithdrawn_1" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "GRTWithdrawn_1", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "ParameterUpdated", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphPublished_2" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphPublished_2", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphDeprecated_2" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphDeprecated_2", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphMetadataUpdated_2" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphMetadataUpdated_2", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SignalMinted" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SignalMinted", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SignalBurned" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SignalBurned", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "GRTWithdrawn_2" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "GRTWithdrawn_2", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphUpgraded" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphUpgraded", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphVersionUpdated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphVersionUpdated", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "LegacySubgraphClaimed" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "LegacySubgraphClaimed", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphReceivedFromL1" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphReceivedFromL1", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphL2TransferFinalized" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "SubgraphL2TransferFinalized", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "CuratorBalanceReceived" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "CuratorBalanceReceived", event));
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "CuratorBalanceReturnedToBeneficiary" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GNSBundle", "CuratorBalanceReturnedToBeneficiary", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphNFT", event: "Transfer" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphNFT", "Transfer", event));
  },
);

indexer.onEvent(
  { contract: "ServiceRegistry", event: "ServiceRegistered" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("ServiceRegistry", "ServiceRegistered", event));
  },
);

indexer.onEvent(
  { contract: "ServiceRegistry", event: "ServiceUnregistered" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("ServiceRegistry", "ServiceUnregistered", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TransferredDelegationReturnedToDelegator" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "TransferredDelegationReturnedToDelegator", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegationParametersUpdated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "DelegationParametersUpdated", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeDeposited" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "StakeDeposited", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeLocked" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "StakeLocked", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeWithdrawn" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "StakeWithdrawn", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeSlashed" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "StakeSlashed", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeDelegated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "StakeDelegated", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeDelegatedLocked" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "StakeDelegatedLocked", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeDelegatedWithdrawn" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "StakeDelegatedWithdrawn", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllocationCreated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "AllocationCreated", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllocationCollected" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "AllocationCollected", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllocationClosed_1" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "AllocationClosed_1", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllocationClosed_2" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "AllocationClosed_2", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "RebateClaimed" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "RebateClaimed", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "RebateCollected" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "RebateCollected", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "SetOperator" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "SetOperator", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "SlasherUpdate" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "SlasherUpdate", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AssetHolderUpdate" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "AssetHolderUpdate", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ParameterUpdated", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "HorizonStakeDeposited" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "HorizonStakeDeposited", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "HorizonStakeLocked" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "HorizonStakeLocked", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "HorizonStakeWithdrawn" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "HorizonStakeWithdrawn", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionCreated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ProvisionCreated", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionIncreased" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ProvisionIncreased", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TokensDeprovisioned" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "TokensDeprovisioned", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionParametersSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ProvisionParametersSet", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionParametersStaged" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ProvisionParametersStaged", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionSlashed" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ProvisionSlashed", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionThawed" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ProvisionThawed", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ThawRequestCreated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ThawRequestCreated", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ThawRequestFulfilled" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ThawRequestFulfilled", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "OperatorSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "OperatorSet", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegationFeeCutSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "DelegationFeeCutSet", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TokensToDelegationPoolAdded" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "TokensToDelegationPoolAdded", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TokensDelegated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "TokensDelegated", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegationSlashed" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "DelegationSlashed", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TokensUndelegated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "TokensUndelegated", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegatedTokensWithdrawn" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "DelegatedTokensWithdrawn", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "MaxThawingPeriodSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "MaxThawingPeriodSet", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ThawingPeriodCleared" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "ThawingPeriodCleared", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegationSlashingEnabled" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "DelegationSlashingEnabled", event));
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllowedLockedVerifierSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("StakingBundle", "AllowedLockedVerifierSet", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "ServiceProviderRegistered" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "ServiceProviderRegistered", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "RewardsDestinationSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "RewardsDestinationSet", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "AllocationCreated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "AllocationCreated", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "AllocationResized" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "AllocationResized", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "AllocationClosed" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "AllocationClosed", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "IndexingRewardsCollected" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "IndexingRewardsCollected", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "QueryFeesCollected" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "QueryFeesCollected", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "DelegationRatioSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "DelegationRatioSet", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "CurationCutSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "CurationCutSet", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "MaxPOIStalenessSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "MaxPOIStalenessSet", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "StakeToFeesRatioSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "StakeToFeesRatioSet", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "ProvisionTokensRangeSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "ProvisionTokensRangeSet", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "VerifierCutRangeSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "VerifierCutRangeSet", event));
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "ThawingPeriodRangeSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("SubgraphService", "ThawingPeriodRangeSet", event));
  },
);

indexer.onEvent(
  { contract: "GraphPayments", event: "GraphPaymentCollected" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GraphPayments", "GraphPaymentCollected", event));
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "Deposit" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("PaymentsEscrow", "Deposit", event));
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "Withdraw" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("PaymentsEscrow", "Withdraw", event));
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "Thaw" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("PaymentsEscrow", "Thaw", event));
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "CancelThaw" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("PaymentsEscrow", "CancelThaw", event));
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "EscrowCollected" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("PaymentsEscrow", "EscrowCollected", event));
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "SignerAuthorized" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GraphTallyCollector", "SignerAuthorized", event));
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "SignerThawing" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GraphTallyCollector", "SignerThawing", event));
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "SignerThawCanceled" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GraphTallyCollector", "SignerThawCanceled", event));
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "SignerRevoked" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GraphTallyCollector", "SignerRevoked", event));
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "PaymentCollected" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GraphTallyCollector", "PaymentCollected", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "QueryDisputeCreated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "QueryDisputeCreated", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "IndexingDisputeCreated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "IndexingDisputeCreated", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "LegacyDisputeCreated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "LegacyDisputeCreated", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeAccepted" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "DisputeAccepted", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeRejected" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "DisputeRejected", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeCancelled" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "DisputeCancelled", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeDrawn" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "DisputeDrawn", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeLinked" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "DisputeLinked", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "ArbitratorSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "ArbitratorSet", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "FishermanRewardCutSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "FishermanRewardCutSet", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "MaxSlashingCutSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "MaxSlashingCutSet", event));
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputePeriodSet" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("HorizonDisputeManager", "DisputePeriodSet", event));
  },
);

indexer.onEvent(
  { contract: "Curation", event: "Signalled" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("Curation", "Signalled", event));
  },
);

indexer.onEvent(
  { contract: "Curation", event: "Burned" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("Curation", "Burned", event));
  },
);

indexer.onEvent(
  { contract: "Curation", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("Curation", "ParameterUpdated", event));
  },
);

indexer.onEvent(
  { contract: "GraphToken", event: "Transfer" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GraphToken", "Transfer", event));
  },
);

indexer.onEvent(
  { contract: "GraphToken", event: "Approval" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("GraphToken", "Approval", event));
  },
);

indexer.onEvent(
  { contract: "EthereumDIDRegistry", event: "DIDAttributeChanged" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("EthereumDIDRegistry", "DIDAttributeChanged", event));
  },
);

indexer.onEvent(
  { contract: "EpochManager", event: "EpochRun" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("EpochManager", "EpochRun", event));
  },
);

indexer.onEvent(
  { contract: "EpochManager", event: "EpochLengthUpdate" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("EpochManager", "EpochLengthUpdate", event));
  },
);

indexer.onEvent(
  { contract: "RewardsManager", event: "RewardsAssigned" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("RewardsManager", "RewardsAssigned", event));
  },
);

indexer.onEvent(
  { contract: "RewardsManager", event: "HorizonRewardsAssigned" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("RewardsManager", "HorizonRewardsAssigned", event));
  },
);

indexer.onEvent(
  { contract: "RewardsManager", event: "RewardsDenylistUpdated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("RewardsManager", "RewardsDenylistUpdated", event));
  },
);

indexer.onEvent(
  { contract: "RewardsManager", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("RewardsManager", "ParameterUpdated", event));
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "QueryDisputeCreated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("DisputeManager", "QueryDisputeCreated", event));
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "IndexingDisputeCreated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("DisputeManager", "IndexingDisputeCreated", event));
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "DisputeAccepted" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("DisputeManager", "DisputeAccepted", event));
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "DisputeRejected" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("DisputeManager", "DisputeRejected", event));
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "DisputeDrawn" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("DisputeManager", "DisputeDrawn", event));
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "DisputeLinked" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("DisputeManager", "DisputeLinked", event));
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("DisputeManager", "ParameterUpdated", event));
  },
);

indexer.onEvent(
  { contract: "L2GraphTokenGateway", event: "WithdrawalInitiated" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("L2GraphTokenGateway", "WithdrawalInitiated", event));
  },
);

indexer.onEvent(
  { contract: "L2GraphTokenGateway", event: "DepositFinalized" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("L2GraphTokenGateway", "DepositFinalized", event));
  },
);

indexer.onEvent(
  { contract: "ArbRetryableTx", event: "RedeemScheduled" },
  async ({ event, context }) => {
    context.GraphNetworkRawEvent.set(rawEvent("ArbRetryableTx", "RedeemScheduled", event));
  },
);

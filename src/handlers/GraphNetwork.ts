import { indexer } from "envio";

function valueToString(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "bigint") return value.toString();
  return JSON.stringify(value, (_key, nested) =>
    typeof nested === "bigint" ? nested.toString() : nested,
  );
}

indexer.onEvent(
  { contract: "Controller", event: "SetContractProxy" },
  async ({ event, context }) => {
    context.ControllerSetContractProxyEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      paramId: valueToString(event.params.id),
      contractAddress: valueToString(event.params.contractAddress),
    });
  },
);

indexer.onEvent(
  { contract: "Controller", event: "NewOwnership" },
  async ({ event, context }) => {
    context.ControllerNewOwnershipEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      from: valueToString(event.params.from),
      to: valueToString(event.params.to),
    });
  },
);

indexer.onEvent(
  { contract: "Controller", event: "PartialPauseChanged" },
  async ({ event, context }) => {
    context.ControllerPartialPauseChangedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      isPaused: valueToString(event.params.isPaused),
    });
  },
);

indexer.onEvent(
  { contract: "Controller", event: "PauseChanged" },
  async ({ event, context }) => {
    context.ControllerPauseChangedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      isPaused: valueToString(event.params.isPaused),
    });
  },
);

indexer.onEvent(
  { contract: "Controller", event: "NewPauseGuardian" },
  async ({ event, context }) => {
    context.ControllerNewPauseGuardianEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      oldPauseGuardian: valueToString(event.params.oldPauseGuardian),
      pauseGuardian: valueToString(event.params.pauseGuardian),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphPublished_1" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphPublished1Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      versionMetadata: valueToString(event.params.versionMetadata),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphDeprecated_1" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphDeprecated1Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SetDefaultName" },
  async ({ event, context }) => {
    context.GNSBundleSetDefaultNameEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      nameSystem: valueToString(event.params.nameSystem),
      nameIdentifier: valueToString(event.params.nameIdentifier),
      name: valueToString(event.params.name),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphMetadataUpdated_1" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphMetadataUpdated1Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
      subgraphMetadata: valueToString(event.params.subgraphMetadata),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NameSignalEnabled" },
  async ({ event, context }) => {
    context.GNSBundleNameSignalEnabledEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      reserveRatio: valueToString(event.params.reserveRatio),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NameSignalUpgrade" },
  async ({ event, context }) => {
    context.GNSBundleNameSignalUpgradeEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
      newVSignalCreated: valueToString(event.params.newVSignalCreated),
      tokensSignalled: valueToString(event.params.tokensSignalled),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NSignalMinted" },
  async ({ event, context }) => {
    context.GNSBundleNSignalMintedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
      nameCurator: valueToString(event.params.nameCurator),
      nSignalCreated: valueToString(event.params.nSignalCreated),
      vSignalCreated: valueToString(event.params.vSignalCreated),
      tokensDeposited: valueToString(event.params.tokensDeposited),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NSignalBurned" },
  async ({ event, context }) => {
    context.GNSBundleNSignalBurnedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
      nameCurator: valueToString(event.params.nameCurator),
      nSignalBurnt: valueToString(event.params.nSignalBurnt),
      vSignalBurnt: valueToString(event.params.vSignalBurnt),
      tokensReceived: valueToString(event.params.tokensReceived),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "NameSignalDisabled" },
  async ({ event, context }) => {
    context.GNSBundleNameSignalDisabledEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
      withdrawableGRT: valueToString(event.params.withdrawableGRT),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "GRTWithdrawn_1" },
  async ({ event, context }) => {
    context.GNSBundleGRTWithdrawn1Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
      nameCurator: valueToString(event.params.nameCurator),
      nSignalBurnt: valueToString(event.params.nSignalBurnt),
      withdrawnGRT: valueToString(event.params.withdrawnGRT),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.GNSBundleParameterUpdatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      param: valueToString(event.params.param),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphPublished_2" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphPublished2Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      subgraphID: valueToString(event.params.subgraphID),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      reserveRatio: valueToString(event.params.reserveRatio),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphDeprecated_2" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphDeprecated2Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      subgraphID: valueToString(event.params.subgraphID),
      withdrawableGRT: valueToString(event.params.withdrawableGRT),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphMetadataUpdated_2" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphMetadataUpdated2Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      subgraphID: valueToString(event.params.subgraphID),
      subgraphMetadata: valueToString(event.params.subgraphMetadata),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SignalMinted" },
  async ({ event, context }) => {
    context.GNSBundleSignalMintedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      subgraphID: valueToString(event.params.subgraphID),
      curator: valueToString(event.params.curator),
      nSignalCreated: valueToString(event.params.nSignalCreated),
      vSignalCreated: valueToString(event.params.vSignalCreated),
      tokensDeposited: valueToString(event.params.tokensDeposited),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SignalBurned" },
  async ({ event, context }) => {
    context.GNSBundleSignalBurnedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      subgraphID: valueToString(event.params.subgraphID),
      curator: valueToString(event.params.curator),
      nSignalBurnt: valueToString(event.params.nSignalBurnt),
      vSignalBurnt: valueToString(event.params.vSignalBurnt),
      tokensReceived: valueToString(event.params.tokensReceived),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "GRTWithdrawn_2" },
  async ({ event, context }) => {
    context.GNSBundleGRTWithdrawn2Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      subgraphID: valueToString(event.params.subgraphID),
      curator: valueToString(event.params.curator),
      nSignalBurnt: valueToString(event.params.nSignalBurnt),
      withdrawnGRT: valueToString(event.params.withdrawnGRT),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphUpgraded" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphUpgradedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      subgraphID: valueToString(event.params.subgraphID),
      vSignalCreated: valueToString(event.params.vSignalCreated),
      tokensSignalled: valueToString(event.params.tokensSignalled),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphVersionUpdated" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphVersionUpdatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      subgraphID: valueToString(event.params.subgraphID),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      versionMetadata: valueToString(event.params.versionMetadata),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "LegacySubgraphClaimed" },
  async ({ event, context }) => {
    context.GNSBundleLegacySubgraphClaimedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      graphAccount: valueToString(event.params.graphAccount),
      subgraphNumber: valueToString(event.params.subgraphNumber),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphReceivedFromL1" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphReceivedFromL1Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      _l1SubgraphID: valueToString(event.params._l1SubgraphID),
      _l2SubgraphID: valueToString(event.params._l2SubgraphID),
      _owner: valueToString(event.params._owner),
      _tokens: valueToString(event.params._tokens),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "SubgraphL2TransferFinalized" },
  async ({ event, context }) => {
    context.GNSBundleSubgraphL2TransferFinalizedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      _l2SubgraphID: valueToString(event.params._l2SubgraphID),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "CuratorBalanceReceived" },
  async ({ event, context }) => {
    context.GNSBundleCuratorBalanceReceivedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      _l1SubgraphId: valueToString(event.params._l1SubgraphId),
      _l2SubgraphID: valueToString(event.params._l2SubgraphID),
      _l2Curator: valueToString(event.params._l2Curator),
      _tokens: valueToString(event.params._tokens),
    });
  },
);

indexer.onEvent(
  { contract: "GNSBundle", event: "CuratorBalanceReturnedToBeneficiary" },
  async ({ event, context }) => {
    context.GNSBundleCuratorBalanceReturnedToBeneficiaryEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      _l1SubgraphID: valueToString(event.params._l1SubgraphID),
      _l2Curator: valueToString(event.params._l2Curator),
      _tokens: valueToString(event.params._tokens),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphNFT", event: "Transfer" },
  async ({ event, context }) => {
    context.SubgraphNFTTransferEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      from: valueToString(event.params.from),
      to: valueToString(event.params.to),
      tokenId: valueToString(event.params.tokenId),
    });
  },
);

indexer.onEvent(
  { contract: "ServiceRegistry", event: "ServiceRegistered" },
  async ({ event, context }) => {
    context.ServiceRegistryServiceRegisteredEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      url: valueToString(event.params.url),
      geohash: valueToString(event.params.geohash),
    });
  },
);

indexer.onEvent(
  { contract: "ServiceRegistry", event: "ServiceUnregistered" },
  async ({ event, context }) => {
    context.ServiceRegistryServiceUnregisteredEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TransferredDelegationReturnedToDelegator" },
  async ({ event, context }) => {
    context.StakingBundleTransferredDelegationReturnedToDelegatorEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      delegator: valueToString(event.params.delegator),
      amount: valueToString(event.params.amount),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegationParametersUpdated" },
  async ({ event, context }) => {
    context.StakingBundleDelegationParametersUpdatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      indexingRewardCut: valueToString(event.params.indexingRewardCut),
      queryFeeCut: valueToString(event.params.queryFeeCut),
      cooldownBlocks: valueToString(event.params.cooldownBlocks),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeDeposited" },
  async ({ event, context }) => {
    context.StakingBundleStakeDepositedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeLocked" },
  async ({ event, context }) => {
    context.StakingBundleStakeLockedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      tokens: valueToString(event.params.tokens),
      until: valueToString(event.params.until),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeWithdrawn" },
  async ({ event, context }) => {
    context.StakingBundleStakeWithdrawnEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeSlashed" },
  async ({ event, context }) => {
    context.StakingBundleStakeSlashedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      tokens: valueToString(event.params.tokens),
      reward: valueToString(event.params.reward),
      beneficiary: valueToString(event.params.beneficiary),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeDelegated" },
  async ({ event, context }) => {
    context.StakingBundleStakeDelegatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      delegator: valueToString(event.params.delegator),
      tokens: valueToString(event.params.tokens),
      shares: valueToString(event.params.shares),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeDelegatedLocked" },
  async ({ event, context }) => {
    context.StakingBundleStakeDelegatedLockedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      delegator: valueToString(event.params.delegator),
      tokens: valueToString(event.params.tokens),
      shares: valueToString(event.params.shares),
      until: valueToString(event.params.until),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "StakeDelegatedWithdrawn" },
  async ({ event, context }) => {
    context.StakingBundleStakeDelegatedWithdrawnEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      delegator: valueToString(event.params.delegator),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllocationCreated" },
  async ({ event, context }) => {
    context.StakingBundleAllocationCreatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      epoch: valueToString(event.params.epoch),
      tokens: valueToString(event.params.tokens),
      allocationID: valueToString(event.params.allocationID),
      metadata: valueToString(event.params.metadata),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllocationCollected" },
  async ({ event, context }) => {
    context.StakingBundleAllocationCollectedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      epoch: valueToString(event.params.epoch),
      tokens: valueToString(event.params.tokens),
      allocationID: valueToString(event.params.allocationID),
      from: valueToString(event.params.from),
      curationFees: valueToString(event.params.curationFees),
      rebateFees: valueToString(event.params.rebateFees),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllocationClosed_1" },
  async ({ event, context }) => {
    context.StakingBundleAllocationClosed1Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      epoch: valueToString(event.params.epoch),
      tokens: valueToString(event.params.tokens),
      allocationID: valueToString(event.params.allocationID),
      effectiveAllocation: valueToString(event.params.effectiveAllocation),
      sender: valueToString(event.params.sender),
      poi: valueToString(event.params.poi),
      isPublic: valueToString(event.params.isPublic),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllocationClosed_2" },
  async ({ event, context }) => {
    context.StakingBundleAllocationClosed2Event.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      epoch: valueToString(event.params.epoch),
      tokens: valueToString(event.params.tokens),
      allocationID: valueToString(event.params.allocationID),
      sender: valueToString(event.params.sender),
      poi: valueToString(event.params.poi),
      isPublic: valueToString(event.params.isPublic),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "RebateClaimed" },
  async ({ event, context }) => {
    context.StakingBundleRebateClaimedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      allocationID: valueToString(event.params.allocationID),
      epoch: valueToString(event.params.epoch),
      forEpoch: valueToString(event.params.forEpoch),
      tokens: valueToString(event.params.tokens),
      unclaimedAllocationsCount: valueToString(event.params.unclaimedAllocationsCount),
      delegationFees: valueToString(event.params.delegationFees),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "RebateCollected" },
  async ({ event, context }) => {
    context.StakingBundleRebateCollectedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      assetHolder: valueToString(event.params.assetHolder),
      indexer: valueToString(event.params.indexer),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      allocationID: valueToString(event.params.allocationID),
      epoch: valueToString(event.params.epoch),
      tokens: valueToString(event.params.tokens),
      protocolTax: valueToString(event.params.protocolTax),
      curationFees: valueToString(event.params.curationFees),
      queryFees: valueToString(event.params.queryFees),
      queryRebates: valueToString(event.params.queryRebates),
      delegationRewards: valueToString(event.params.delegationRewards),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "SetOperator" },
  async ({ event, context }) => {
    context.StakingBundleSetOperatorEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      operator: valueToString(event.params.operator),
      allowed: valueToString(event.params.allowed),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "SlasherUpdate" },
  async ({ event, context }) => {
    context.StakingBundleSlasherUpdateEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      caller: valueToString(event.params.caller),
      slasher: valueToString(event.params.slasher),
      allowed: valueToString(event.params.allowed),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AssetHolderUpdate" },
  async ({ event, context }) => {
    context.StakingBundleAssetHolderUpdateEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      caller: valueToString(event.params.caller),
      assetHolder: valueToString(event.params.assetHolder),
      allowed: valueToString(event.params.allowed),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.StakingBundleParameterUpdatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      param: valueToString(event.params.param),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "HorizonStakeDeposited" },
  async ({ event, context }) => {
    context.StakingBundleHorizonStakeDepositedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "HorizonStakeLocked" },
  async ({ event, context }) => {
    context.StakingBundleHorizonStakeLockedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      tokens: valueToString(event.params.tokens),
      until: valueToString(event.params.until),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "HorizonStakeWithdrawn" },
  async ({ event, context }) => {
    context.StakingBundleHorizonStakeWithdrawnEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionCreated" },
  async ({ event, context }) => {
    context.StakingBundleProvisionCreatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      tokens: valueToString(event.params.tokens),
      maxVerifierCut: valueToString(event.params.maxVerifierCut),
      thawingPeriod: valueToString(event.params.thawingPeriod),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionIncreased" },
  async ({ event, context }) => {
    context.StakingBundleProvisionIncreasedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TokensDeprovisioned" },
  async ({ event, context }) => {
    context.StakingBundleTokensDeprovisionedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionParametersSet" },
  async ({ event, context }) => {
    context.StakingBundleProvisionParametersSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      maxVerifierCut: valueToString(event.params.maxVerifierCut),
      thawingPeriod: valueToString(event.params.thawingPeriod),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionParametersStaged" },
  async ({ event, context }) => {
    context.StakingBundleProvisionParametersStagedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      maxVerifierCut: valueToString(event.params.maxVerifierCut),
      thawingPeriod: valueToString(event.params.thawingPeriod),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionSlashed" },
  async ({ event, context }) => {
    context.StakingBundleProvisionSlashedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ProvisionThawed" },
  async ({ event, context }) => {
    context.StakingBundleProvisionThawedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ThawRequestCreated" },
  async ({ event, context }) => {
    context.StakingBundleThawRequestCreatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      requestType: valueToString(event.params.requestType),
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      owner: valueToString(event.params.owner),
      shares: valueToString(event.params.shares),
      thawingUntil: valueToString(event.params.thawingUntil),
      thawRequestId: valueToString(event.params.thawRequestId),
      nonce: valueToString(event.params.nonce),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ThawRequestFulfilled" },
  async ({ event, context }) => {
    context.StakingBundleThawRequestFulfilledEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      requestType: valueToString(event.params.requestType),
      thawRequestId: valueToString(event.params.thawRequestId),
      tokens: valueToString(event.params.tokens),
      shares: valueToString(event.params.shares),
      thawingUntil: valueToString(event.params.thawingUntil),
      valid: valueToString(event.params.valid),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "OperatorSet" },
  async ({ event, context }) => {
    context.StakingBundleOperatorSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      operator: valueToString(event.params.operator),
      allowed: valueToString(event.params.allowed),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegationFeeCutSet" },
  async ({ event, context }) => {
    context.StakingBundleDelegationFeeCutSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      paymentType: valueToString(event.params.paymentType),
      feeCut: valueToString(event.params.feeCut),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TokensToDelegationPoolAdded" },
  async ({ event, context }) => {
    context.StakingBundleTokensToDelegationPoolAddedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TokensDelegated" },
  async ({ event, context }) => {
    context.StakingBundleTokensDelegatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      delegator: valueToString(event.params.delegator),
      tokens: valueToString(event.params.tokens),
      shares: valueToString(event.params.shares),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegationSlashed" },
  async ({ event, context }) => {
    context.StakingBundleDelegationSlashedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "TokensUndelegated" },
  async ({ event, context }) => {
    context.StakingBundleTokensUndelegatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      delegator: valueToString(event.params.delegator),
      tokens: valueToString(event.params.tokens),
      shares: valueToString(event.params.shares),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegatedTokensWithdrawn" },
  async ({ event, context }) => {
    context.StakingBundleDelegatedTokensWithdrawnEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      verifier: valueToString(event.params.verifier),
      delegator: valueToString(event.params.delegator),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "MaxThawingPeriodSet" },
  async ({ event, context }) => {
    context.StakingBundleMaxThawingPeriodSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      maxThawingPeriod: valueToString(event.params.maxThawingPeriod),
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "ThawingPeriodCleared" },
  async ({ event, context }) => {
    context.StakingBundleThawingPeriodClearedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "DelegationSlashingEnabled" },
  async ({ event, context }) => {
    context.StakingBundleDelegationSlashingEnabledEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
    });
  },
);

indexer.onEvent(
  { contract: "StakingBundle", event: "AllowedLockedVerifierSet" },
  async ({ event, context }) => {
    context.StakingBundleAllowedLockedVerifierSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      verifier: valueToString(event.params.verifier),
      allowed: valueToString(event.params.allowed),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "ServiceProviderRegistered" },
  async ({ event, context }) => {
    context.SubgraphServiceServiceProviderRegisteredEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      data: valueToString(event.params.data),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "RewardsDestinationSet" },
  async ({ event, context }) => {
    context.SubgraphServiceRewardsDestinationSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      rewardsDestination: valueToString(event.params.rewardsDestination),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "AllocationCreated" },
  async ({ event, context }) => {
    context.SubgraphServiceAllocationCreatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      allocationId: valueToString(event.params.allocationId),
      subgraphDeploymentId: valueToString(event.params.subgraphDeploymentId),
      tokens: valueToString(event.params.tokens),
      currentEpoch: valueToString(event.params.currentEpoch),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "AllocationResized" },
  async ({ event, context }) => {
    context.SubgraphServiceAllocationResizedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      allocationId: valueToString(event.params.allocationId),
      subgraphDeploymentId: valueToString(event.params.subgraphDeploymentId),
      newTokens: valueToString(event.params.newTokens),
      oldTokens: valueToString(event.params.oldTokens),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "AllocationClosed" },
  async ({ event, context }) => {
    context.SubgraphServiceAllocationClosedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      allocationId: valueToString(event.params.allocationId),
      subgraphDeploymentId: valueToString(event.params.subgraphDeploymentId),
      tokens: valueToString(event.params.tokens),
      forceClosed: valueToString(event.params.forceClosed),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "IndexingRewardsCollected" },
  async ({ event, context }) => {
    context.SubgraphServiceIndexingRewardsCollectedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      allocationId: valueToString(event.params.allocationId),
      subgraphDeploymentId: valueToString(event.params.subgraphDeploymentId),
      tokensRewards: valueToString(event.params.tokensRewards),
      tokensIndexerRewards: valueToString(event.params.tokensIndexerRewards),
      tokensDelegationRewards: valueToString(event.params.tokensDelegationRewards),
      poi: valueToString(event.params.poi),
      poiMetadata: valueToString(event.params.poiMetadata),
      currentEpoch: valueToString(event.params.currentEpoch),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "QueryFeesCollected" },
  async ({ event, context }) => {
    context.SubgraphServiceQueryFeesCollectedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      serviceProvider: valueToString(event.params.serviceProvider),
      payer: valueToString(event.params.payer),
      allocationId: valueToString(event.params.allocationId),
      subgraphDeploymentId: valueToString(event.params.subgraphDeploymentId),
      tokensCollected: valueToString(event.params.tokensCollected),
      tokensCurators: valueToString(event.params.tokensCurators),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "DelegationRatioSet" },
  async ({ event, context }) => {
    context.SubgraphServiceDelegationRatioSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      ratio: valueToString(event.params.ratio),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "CurationCutSet" },
  async ({ event, context }) => {
    context.SubgraphServiceCurationCutSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      curationCut: valueToString(event.params.curationCut),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "MaxPOIStalenessSet" },
  async ({ event, context }) => {
    context.SubgraphServiceMaxPOIStalenessSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      maxPOIStaleness: valueToString(event.params.maxPOIStaleness),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "StakeToFeesRatioSet" },
  async ({ event, context }) => {
    context.SubgraphServiceStakeToFeesRatioSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      ratio: valueToString(event.params.ratio),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "ProvisionTokensRangeSet" },
  async ({ event, context }) => {
    context.SubgraphServiceProvisionTokensRangeSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      min: valueToString(event.params.min),
      max: valueToString(event.params.max),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "VerifierCutRangeSet" },
  async ({ event, context }) => {
    context.SubgraphServiceVerifierCutRangeSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      min: valueToString(event.params.min),
      max: valueToString(event.params.max),
    });
  },
);

indexer.onEvent(
  { contract: "SubgraphService", event: "ThawingPeriodRangeSet" },
  async ({ event, context }) => {
    context.SubgraphServiceThawingPeriodRangeSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      min: valueToString(event.params.min),
      max: valueToString(event.params.max),
    });
  },
);

indexer.onEvent(
  { contract: "GraphPayments", event: "GraphPaymentCollected" },
  async ({ event, context }) => {
    context.GraphPaymentsGraphPaymentCollectedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      paymentType: valueToString(event.params.paymentType),
      payer: valueToString(event.params.payer),
      receiver: valueToString(event.params.receiver),
      dataService: valueToString(event.params.dataService),
      tokens: valueToString(event.params.tokens),
      tokensProtocol: valueToString(event.params.tokensProtocol),
      tokensDataService: valueToString(event.params.tokensDataService),
      tokensDelegationPool: valueToString(event.params.tokensDelegationPool),
      tokensReceiver: valueToString(event.params.tokensReceiver),
    });
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "Deposit" },
  async ({ event, context }) => {
    context.PaymentsEscrowDepositEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      payer: valueToString(event.params.payer),
      collector: valueToString(event.params.collector),
      receiver: valueToString(event.params.receiver),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "Withdraw" },
  async ({ event, context }) => {
    context.PaymentsEscrowWithdrawEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      payer: valueToString(event.params.payer),
      collector: valueToString(event.params.collector),
      receiver: valueToString(event.params.receiver),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "Thaw" },
  async ({ event, context }) => {
    context.PaymentsEscrowThawEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      payer: valueToString(event.params.payer),
      collector: valueToString(event.params.collector),
      receiver: valueToString(event.params.receiver),
      tokens: valueToString(event.params.tokens),
      thawEndTimestamp: valueToString(event.params.thawEndTimestamp),
    });
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "CancelThaw" },
  async ({ event, context }) => {
    context.PaymentsEscrowCancelThawEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      payer: valueToString(event.params.payer),
      collector: valueToString(event.params.collector),
      receiver: valueToString(event.params.receiver),
      tokensThawing: valueToString(event.params.tokensThawing),
      thawEndTimestamp: valueToString(event.params.thawEndTimestamp),
    });
  },
);

indexer.onEvent(
  { contract: "PaymentsEscrow", event: "EscrowCollected" },
  async ({ event, context }) => {
    context.PaymentsEscrowEscrowCollectedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      paymentType: valueToString(event.params.paymentType),
      payer: valueToString(event.params.payer),
      collector: valueToString(event.params.collector),
      receiver: valueToString(event.params.receiver),
      tokens: valueToString(event.params.tokens),
      receiverDestination: valueToString(event.params.receiverDestination),
    });
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "SignerAuthorized" },
  async ({ event, context }) => {
    context.GraphTallyCollectorSignerAuthorizedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      authorizer: valueToString(event.params.authorizer),
      signer: valueToString(event.params.signer),
    });
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "SignerThawing" },
  async ({ event, context }) => {
    context.GraphTallyCollectorSignerThawingEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      authorizer: valueToString(event.params.authorizer),
      signer: valueToString(event.params.signer),
      thawEndTimestamp: valueToString(event.params.thawEndTimestamp),
    });
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "SignerThawCanceled" },
  async ({ event, context }) => {
    context.GraphTallyCollectorSignerThawCanceledEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      authorizer: valueToString(event.params.authorizer),
      signer: valueToString(event.params.signer),
      thawEndTimestamp: valueToString(event.params.thawEndTimestamp),
    });
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "SignerRevoked" },
  async ({ event, context }) => {
    context.GraphTallyCollectorSignerRevokedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      authorizer: valueToString(event.params.authorizer),
      signer: valueToString(event.params.signer),
    });
  },
);

indexer.onEvent(
  { contract: "GraphTallyCollector", event: "PaymentCollected" },
  async ({ event, context }) => {
    context.GraphTallyCollectorPaymentCollectedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      paymentType: valueToString(event.params.paymentType),
      collectionId: valueToString(event.params.collectionId),
      payer: valueToString(event.params.payer),
      receiver: valueToString(event.params.receiver),
      dataService: valueToString(event.params.dataService),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "QueryDisputeCreated" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerQueryDisputeCreatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeId: valueToString(event.params.disputeId),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
      subgraphDeploymentId: valueToString(event.params.subgraphDeploymentId),
      attestation: valueToString(event.params.attestation),
      stakeSnapshot: valueToString(event.params.stakeSnapshot),
      cancellableAt: valueToString(event.params.cancellableAt),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "IndexingDisputeCreated" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerIndexingDisputeCreatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeId: valueToString(event.params.disputeId),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
      allocationId: valueToString(event.params.allocationId),
      poi: valueToString(event.params.poi),
      paramBlockNumber: valueToString(event.params.blockNumber),
      stakeSnapshot: valueToString(event.params.stakeSnapshot),
      cancellableAt: valueToString(event.params.cancellableAt),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "LegacyDisputeCreated" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerLegacyDisputeCreatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeId: valueToString(event.params.disputeId),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      allocationId: valueToString(event.params.allocationId),
      tokensSlash: valueToString(event.params.tokensSlash),
      tokensRewards: valueToString(event.params.tokensRewards),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeAccepted" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerDisputeAcceptedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeId: valueToString(event.params.disputeId),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeRejected" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerDisputeRejectedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeId: valueToString(event.params.disputeId),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeCancelled" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerDisputeCancelledEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeId: valueToString(event.params.disputeId),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeDrawn" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerDisputeDrawnEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeId: valueToString(event.params.disputeId),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputeLinked" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerDisputeLinkedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeId1: valueToString(event.params.disputeId1),
      disputeId2: valueToString(event.params.disputeId2),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "ArbitratorSet" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerArbitratorSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      arbitrator: valueToString(event.params.arbitrator),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "FishermanRewardCutSet" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerFishermanRewardCutSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      fishermanRewardCut: valueToString(event.params.fishermanRewardCut),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "MaxSlashingCutSet" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerMaxSlashingCutSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      maxSlashingCut: valueToString(event.params.maxSlashingCut),
    });
  },
);

indexer.onEvent(
  { contract: "HorizonDisputeManager", event: "DisputePeriodSet" },
  async ({ event, context }) => {
    context.HorizonDisputeManagerDisputePeriodSetEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputePeriod: valueToString(event.params.disputePeriod),
    });
  },
);

indexer.onEvent(
  { contract: "Curation", event: "Signalled" },
  async ({ event, context }) => {
    context.CurationSignalledEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      curator: valueToString(event.params.curator),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      tokens: valueToString(event.params.tokens),
      signal: valueToString(event.params.signal),
      curationTax: valueToString(event.params.curationTax),
    });
  },
);

indexer.onEvent(
  { contract: "Curation", event: "Burned" },
  async ({ event, context }) => {
    context.CurationBurnedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      curator: valueToString(event.params.curator),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      tokens: valueToString(event.params.tokens),
      signal: valueToString(event.params.signal),
    });
  },
);

indexer.onEvent(
  { contract: "Curation", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.CurationParameterUpdatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      param: valueToString(event.params.param),
    });
  },
);

indexer.onEvent(
  { contract: "GraphToken", event: "Transfer" },
  async ({ event, context }) => {
    context.GraphTokenTransferEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      from: valueToString(event.params.from),
      to: valueToString(event.params.to),
      value: valueToString(event.params.value),
    });
  },
);

indexer.onEvent(
  { contract: "GraphToken", event: "Approval" },
  async ({ event, context }) => {
    context.GraphTokenApprovalEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      owner: valueToString(event.params.owner),
      spender: valueToString(event.params.spender),
      value: valueToString(event.params.value),
    });
  },
);

indexer.onEvent(
  { contract: "EthereumDIDRegistry", event: "DIDAttributeChanged" },
  async ({ event, context }) => {
    context.EthereumDIDRegistryDIDAttributeChangedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      identity: valueToString(event.params.identity),
      name: valueToString(event.params.name),
      value: valueToString(event.params.value),
      validTo: valueToString(event.params.validTo),
      previousChange: valueToString(event.params.previousChange),
    });
  },
);

indexer.onEvent(
  { contract: "EpochManager", event: "EpochRun" },
  async ({ event, context }) => {
    context.EpochManagerEpochRunEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      epoch: valueToString(event.params.epoch),
      caller: valueToString(event.params.caller),
    });
  },
);

indexer.onEvent(
  { contract: "EpochManager", event: "EpochLengthUpdate" },
  async ({ event, context }) => {
    context.EpochManagerEpochLengthUpdateEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      epoch: valueToString(event.params.epoch),
      epochLength: valueToString(event.params.epochLength),
    });
  },
);

indexer.onEvent(
  { contract: "RewardsManager", event: "RewardsAssigned" },
  async ({ event, context }) => {
    context.RewardsManagerRewardsAssignedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      allocationID: valueToString(event.params.allocationID),
      epoch: valueToString(event.params.epoch),
      amount: valueToString(event.params.amount),
    });
  },
);

indexer.onEvent(
  { contract: "RewardsManager", event: "HorizonRewardsAssigned" },
  async ({ event, context }) => {
    context.RewardsManagerHorizonRewardsAssignedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      indexer: valueToString(event.params.indexer),
      allocationID: valueToString(event.params.allocationID),
      amount: valueToString(event.params.amount),
    });
  },
);

indexer.onEvent(
  { contract: "RewardsManager", event: "RewardsDenylistUpdated" },
  async ({ event, context }) => {
    context.RewardsManagerRewardsDenylistUpdatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      sinceBlock: valueToString(event.params.sinceBlock),
    });
  },
);

indexer.onEvent(
  { contract: "RewardsManager", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.RewardsManagerParameterUpdatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      param: valueToString(event.params.param),
    });
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "QueryDisputeCreated" },
  async ({ event, context }) => {
    context.DisputeManagerQueryDisputeCreatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeID: valueToString(event.params.disputeID),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
      subgraphDeploymentID: valueToString(event.params.subgraphDeploymentID),
      attestation: valueToString(event.params.attestation),
    });
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "IndexingDisputeCreated" },
  async ({ event, context }) => {
    context.DisputeManagerIndexingDisputeCreatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeID: valueToString(event.params.disputeID),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
      allocationID: valueToString(event.params.allocationID),
    });
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "DisputeAccepted" },
  async ({ event, context }) => {
    context.DisputeManagerDisputeAcceptedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeID: valueToString(event.params.disputeID),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "DisputeRejected" },
  async ({ event, context }) => {
    context.DisputeManagerDisputeRejectedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeID: valueToString(event.params.disputeID),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "DisputeDrawn" },
  async ({ event, context }) => {
    context.DisputeManagerDisputeDrawnEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeID: valueToString(event.params.disputeID),
      indexer: valueToString(event.params.indexer),
      fisherman: valueToString(event.params.fisherman),
      tokens: valueToString(event.params.tokens),
    });
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "DisputeLinked" },
  async ({ event, context }) => {
    context.DisputeManagerDisputeLinkedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      disputeID1: valueToString(event.params.disputeID1),
      disputeID2: valueToString(event.params.disputeID2),
    });
  },
);

indexer.onEvent(
  { contract: "DisputeManager", event: "ParameterUpdated" },
  async ({ event, context }) => {
    context.DisputeManagerParameterUpdatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      param: valueToString(event.params.param),
    });
  },
);

indexer.onEvent(
  { contract: "L2GraphTokenGateway", event: "WithdrawalInitiated" },
  async ({ event, context }) => {
    context.L2GraphTokenGatewayWithdrawalInitiatedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      l1Token: valueToString(event.params.l1Token),
      from: valueToString(event.params.from),
      to: valueToString(event.params.to),
      l2ToL1Id: valueToString(event.params.l2ToL1Id),
      exitNum: valueToString(event.params.exitNum),
      amount: valueToString(event.params.amount),
    });
  },
);

indexer.onEvent(
  { contract: "L2GraphTokenGateway", event: "DepositFinalized" },
  async ({ event, context }) => {
    context.L2GraphTokenGatewayDepositFinalizedEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      l1Token: valueToString(event.params.l1Token),
      from: valueToString(event.params.from),
      to: valueToString(event.params.to),
      amount: valueToString(event.params.amount),
    });
  },
);

indexer.onEvent(
  { contract: "ArbRetryableTx", event: "RedeemScheduled" },
  async ({ event, context }) => {
    context.ArbRetryableTxRedeemScheduledEvent.set({
      id: `${event.chainId}-${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      srcAddress: event.srcAddress,
      blockNumber: BigInt(event.block.number),
      blockTimestamp: BigInt(event.block.timestamp),
      transactionHash: event.transaction.hash,
      logIndex: event.logIndex,
      ticketId: valueToString(event.params.ticketId),
      retryTxHash: valueToString(event.params.retryTxHash),
      sequenceNum: valueToString(event.params.sequenceNum),
      donatedGas: valueToString(event.params.donatedGas),
      gasDonor: valueToString(event.params.gasDonor),
      maxRefund: valueToString(event.params.maxRefund),
      submissionFeeRefund: valueToString(event.params.submissionFeeRefund),
    });
  },
);

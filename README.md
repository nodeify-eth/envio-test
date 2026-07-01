# Graph Network Arbitrum HyperIndex

Envio HyperIndex migration seed for the Graph Network Arbitrum subgraph. The source subgraph is [graphprotocol/graph-network-subgraph](https://github.com/graphprotocol/graph-network-subgraph), rendered for Arbitrum One from the upstream `subgraph.template.yaml`.

## What is migrated

- `upstream/subgraph.yaml` is the rendered Graph manifest for Arbitrum One.
- `config.yaml` follows the Envio V3 migration guide: Graph data sources become Envio contracts/chains, with Arbitrum One chain ID `42161`, start block `42440000`, and the upstream contract addresses.
- Graph data sources that share one proxy address are collapsed into one Envio contract with a merged ABI, because Envio does not allow the same address to be configured as multiple contracts.
- `schema.graphql` is the active Envio schema for the migrated raw event handlers.
- `upstream/schema.graphql` is the original Graph schema retained for the semantic entity migration.
- `src/handlers/GraphNetwork.ts` registers every upstream event with `indexer.onEvent(...)` and persists a normalized raw event row. Overloaded upstream events use explicit Envio event names such as `SubgraphPublished_1` and `SubgraphPublished_2`.

This repo is ready to use as a HyperIndex deployment target. The full semantic port of the upstream AssemblyScript entity logic can be done incrementally on top of this seed by replacing raw-event handlers with entity-specific updates.

## Run locally

```sh
pnpm install
pnpm codegen
pnpm typecheck
```

For local indexing, provide the runtime data-source credentials expected by your deployment environment, then run:

```sh
pnpm dev
```

## Operator deployment

Point an `EnvioIndexer` at this repo and set secrets for the data sources enabled in the operator CR. A minimal source reference looks like:

```yaml
spec:
  source:
    git:
      url: https://github.com/nodeify-eth/envio-test.git
      revision: main
```

The operator owns Postgres/CNPG and data-source token injection. This repo only contains the HyperIndex project code.

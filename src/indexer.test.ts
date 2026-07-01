import { createTestIndexer } from "envio";
import { describe, it, expect } from "vitest";

describe("Graph Network Arbitrum migration handlers", () => {
  it("stores migrated Controller events in event-specific tables", async () => {
    const indexer = createTestIndexer();

    const result = await indexer.process({
      chains: {
        42161: {
          simulate: [
            {
              contract: "Controller",
              event: "SetContractProxy",
              params: {
                id: "0xe6876326c1291dfcbbd3864a6816d698cd591defc7aa2153d7f9c4c04016c89f",
                contractAddress: "0x22d78fb4bc72e191C765807f8891B5e1785C8014",
              },
            },
          ],
        },
      },
    });

    expect(result.changes).toHaveLength(1);
    const firstChange = result.changes[0];
    expect(firstChange).toBeDefined();
    const sets = firstChange?.ControllerSetContractProxyEvent?.sets;
    expect(sets).toBeDefined();
    const set = sets?.at(0);
    expect(set).toBeDefined();
    expect(set).toMatchObject({
      paramId: "0xe6876326c1291dfcbbd3864a6816d698cd591defc7aa2153d7f9c4c04016c89f",
      contractAddress: "0x22d78fb4bc72e191C765807f8891B5e1785C8014",
    });
  });
});

import { IAgentRuntime, Memory, Provider, State, elizaLogger } from "@elizaos/core";
import { ValidatedConfig } from "../../utils";

export function getCoreActiveAccountsProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.coreConfluxScan) {
        return null;
    }

    const confluxScan = config.coreConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:core:confluxscan:active_accounts`;

            try {
                const cachedStat = await cache.get(cacheKey);
                elizaLogger.info("ConfluxScan Core stats provider cache check:", {
                    provider: "core-stats",
                    statType: "active-accounts",
                    hasCachedData: cachedStat !== null
                });

                if (cachedStat) {
                    return cachedStat as string;
                }

                const stat = await confluxScan.getFormattedActiveAccountStats();
                const statText = `Active Accounts:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core Active Accounts provider:", error);
                return null;
            }
        },
    };
}

export function getCoreCfxHoldersProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.coreConfluxScan) {
        return null;
    }

    const confluxScan = config.coreConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:core:confluxscan:cfx_holders`;

            try {
                const cachedStat = await cache.get(cacheKey);
                elizaLogger.info("ConfluxScan Core stats provider cache check:", {
                    provider: "core-stats",
                    statType: "cfx-holders",
                    hasCachedData: cachedStat !== null
                });

                if (cachedStat) {
                    return cachedStat as string;
                }

                const stat = await confluxScan.getFormattedCfxHolderStats();
                const statText = `CFX Holders:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core CFX Holders provider:", error);
                return null;
            }
        },
    };
}

export function getCoreAccountGrowthProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.coreConfluxScan) {
        return null;
    }

    const confluxScan = config.coreConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:core:confluxscan:account_growth`;

            try {
                const cachedStat = await cache.get(cacheKey);
                elizaLogger.info("ConfluxScan Core stats provider cache check:", {
                    provider: "core-stats",
                    statType: "account-growth",
                    hasCachedData: cachedStat !== null
                });

                if (cachedStat) {
                    return cachedStat as string;
                }

                const stat = await confluxScan.getFormattedAccountGrowthStats();
                const statText = `Account Growth:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core Account Growth provider:", error);
                return null;
            }
        },
    };
}

export function getCoreContractsProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.coreConfluxScan) {
        return null;
    }

    const confluxScan = config.coreConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:core:confluxscan:contracts`;

            try {
                const cachedStat = await cache.get(cacheKey);
                elizaLogger.info("ConfluxScan Core stats provider cache check:", {
                    provider: "core-stats",
                    statType: "contracts",
                    hasCachedData: cachedStat !== null
                });

                if (cachedStat) {
                    return cachedStat as string;
                }

                const stat = await confluxScan.getFormattedContractStats();
                const statText = `Contracts:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core Contracts provider:", error);
                return null;
            }
        },
    };
}

export function getCoreSupplyProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.coreConfluxScan) {
        return null;
    }

    const confluxScan = config.coreConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:core:confluxscan:supply`;

            try {
                const cachedStat = await cache.get(cacheKey);
                elizaLogger.info("ConfluxScan Core stats provider cache check:", {
                    provider: "core-stats",
                    statType: "supply",
                    hasCachedData: cachedStat !== null
                });

                if (cachedStat) {
                    return cachedStat as string;
                }

                const stat = await confluxScan.getFormattedSupplyStats();
                const statText = `Supply:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core Supply provider:", error);
                return null;
            }
        },
    };
}

export function getCoreTransactionsProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.coreConfluxScan) {
        return null;
    }

    const confluxScan = config.coreConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:core:confluxscan:transactions`;

            try {
                const cachedStat = await cache.get(cacheKey);
                elizaLogger.info("ConfluxScan Core stats provider cache check:", {
                    provider: "core-stats",
                    statType: "transactions",
                    hasCachedData: cachedStat !== null
                });

                if (cachedStat) {
                    return cachedStat as string;
                }

                const stat = await confluxScan.getFormattedTransactionStats();
                const statText = `Transactions:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core Transactions provider:", error);
                return null;
            }
        },
    };
}

export function getCoreCfxTransfersProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.coreConfluxScan) {
        return null;
    }

    const confluxScan = config.coreConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:core:confluxscan:cfx_transfers`;

            try {
                const cachedStat = await cache.get(cacheKey);
                elizaLogger.info("ConfluxScan Core stats provider cache check:", {
                    provider: "core-stats",
                    statType: "cfx-transfers",
                    hasCachedData: cachedStat !== null
                });

                if (cachedStat) {
                    return cachedStat as string;
                }

                const stat = await confluxScan.getFormattedCfxTransferStats();
                const statText = `CFX Transfers:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core CFX Transfers provider:", error);
                return null;
            }
        },
    };
}

export function getCoreTpsProvider(config: ValidatedConfig): Provider | null {
    if (!config.coreConfluxScan) {
        return null;
    }

    const confluxScan = config.coreConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:core:confluxscan:tps`;

            try {
                const cachedStat = await cache.get(cacheKey);
                elizaLogger.info("ConfluxScan Core stats provider cache check:", {
                    provider: "core-stats",
                    statType: "tps",
                    hasCachedData: cachedStat !== null
                });

                if (cachedStat) {
                    return cachedStat as string;
                }

                const stat = await confluxScan.getFormattedTpsStats();
                const statText = `TPS:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core TPS provider:", error);
                return null;
            }
        },
    };
}

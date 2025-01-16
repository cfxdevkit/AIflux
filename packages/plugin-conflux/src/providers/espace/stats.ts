import { IAgentRuntime, Memory, Provider, State, elizaLogger } from "@elizaos/core";
import { ValidatedConfig } from "../../utils";

export function getEspaceActiveAccountsProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.espaceConfluxScan) {
        return null;
    }

    const confluxScan = config.espaceConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:espace:confluxscan:active_accounts`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedActiveAccountStats();
                const statText = `Active Accounts:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error(
                    "Error in eSpace Active Accounts provider:",
                    error
                );
                return null;
            }
        },
    };
}

export function getEspaceCfxHoldersProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.espaceConfluxScan) {
        return null;
    }

    const confluxScan = config.espaceConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:espace:confluxscan:cfx_holders`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedCfxHolderStats();
                const statText = `CFX Holders:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in eSpace CFX Holders provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceAccountGrowthProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.espaceConfluxScan) {
        return null;
    }

    const confluxScan = config.espaceConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:espace:confluxscan:account_growth`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedAccountGrowthStats();
                const statText = `Account Growth:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error(
                    "Error in eSpace Account Growth provider:",
                    error
                );
                return null;
            }
        },
    };
}

export function getEspaceContractsProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.espaceConfluxScan) {
        return null;
    }

    const confluxScan = config.espaceConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:espace:confluxscan:contracts`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedContractStats();
                const statText = `Contracts:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in eSpace Contracts provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceTransactionsProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.espaceConfluxScan) {
        return null;
    }

    const confluxScan = config.espaceConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:espace:confluxscan:transactions`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedTransactionStats();
                const statText = `Transactions:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in eSpace Transactions provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceCfxTransfersProvider(
    config: ValidatedConfig
): Provider | null {
    if (!config.espaceConfluxScan) {
        return null;
    }

    const confluxScan = config.espaceConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:espace:confluxscan:cfx_transfers`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedCfxTransferStats();
                const statText = `CFX Transfers:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in eSpace CFX Transfers provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceTpsProvider(config: ValidatedConfig): Provider | null {
    if (!config.espaceConfluxScan) {
        return null;
    }

    const confluxScan = config.espaceConfluxScan;

    return {
        get: async (
            runtime: IAgentRuntime,
            _message: Memory,
            _state?: State
        ): Promise<string | null> => {
            const cache = runtime.cacheManager;
            const cacheKey = `conflux:espace:confluxscan:tps`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedTpsStats();
                const statText = `TPS:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in eSpace TPS provider:", error);
                return null;
            }
        },
    };
}

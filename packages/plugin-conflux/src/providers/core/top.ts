import { IAgentRuntime, Memory, Provider, State, elizaLogger } from "@elizaos/core";
import { ValidatedConfig } from "../../utils";

export function getCoreTopMinersProvider(
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
            const cacheKey = `conflux:core:confluxscan:top_miners`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedTopMiners();
                const statText = `Top Miners:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core Top Miners provider:", error);
                return null;
            }
        },
    };
}

export function getCoreTopGasUsedProvider(
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
            const cacheKey = `conflux:core:confluxscan:top_gas_used`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedTopGasUsed();
                const statText = `Top Gas Users:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core Top Gas Used provider:", error);
                return null;
            }
        },
    };
}

export function getCoreTopCfxSendersProvider(
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
            const cacheKey = `conflux:core:confluxscan:top_cfx_senders`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedTopCfxSenders();
                const statText = `Top CFX Senders:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in Core Top CFX Senders provider:", error);
                return null;
            }
        },
    };
}

export function getCoreTopCfxReceiversProvider(
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
            const cacheKey = `conflux:core:confluxscan:top_cfx_receivers`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedTopCfxReceivers();
                const statText = `Top CFX Receivers:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error(
                    "Error in Core Top CFX Receivers provider:",
                    error
                );
                return null;
            }
        },
    };
}

export function getCoreTopTransactionSendersProvider(
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
            const cacheKey = `conflux:core:confluxscan:top_tx_senders`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat =
                    await confluxScan.getFormattedTopTransactionSenders();
                const statText = `Top Transaction Senders:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error(
                    "Error in Core Top Transaction Senders provider:",
                    error
                );
                return null;
            }
        },
    };
}

export function getCoreTopTransactionReceiversProvider(
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
            const cacheKey = `conflux:core:confluxscan:top_tx_receivers`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat =
                    await confluxScan.getFormattedTopTransactionReceivers();
                const statText = `Top Transaction Receivers:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error(
                    "Error in Core Top Transaction Receivers provider:",
                    error
                );
                return null;
            }
        },
    };
}

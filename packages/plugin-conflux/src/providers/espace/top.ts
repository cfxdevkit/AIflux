import { IAgentRuntime, Memory, Provider, State, elizaLogger } from "@elizaos/core";
import { ValidatedConfig } from "../../utils";

export function getEspaceTopGasUsedProvider(
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
            const cacheKey = `conflux:espace:confluxscan:top_gas_used`;

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
                elizaLogger.error("Error in eSpace Top Gas Used provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceTopCfxSendersProvider(
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
            const cacheKey = `conflux:espace:confluxscan:top_cfx_senders`;

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
                elizaLogger.error("Error in eSpace Top CFX Senders provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceTopCfxReceiversProvider(
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
            const cacheKey = `conflux:espace:confluxscan:top_cfx_receivers`;

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
                elizaLogger.error("Error in eSpace Top CFX Receivers provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceTopTransactionSendersProvider(
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
            const cacheKey = `conflux:espace:confluxscan:top_tx_senders`;

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
                elizaLogger.error("Error in eSpace Top Transaction Senders provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceTopTransactionReceiversProvider(
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
            const cacheKey = `conflux:espace:confluxscan:top_tx_receivers`;

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
                elizaLogger.error("Error in eSpace Top Transaction Receivers provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceTopTokenParticipantsProvider(
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
            const cacheKey = `conflux:espace:confluxscan:top_token_participants`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat =
                    await confluxScan.getFormattedTopTokenParticipants();
                const statText = `Top Token Participants:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in eSpace Top Token Participants provider:", error);
                return null;
            }
        },
    };
}

export function getEspaceTopTokenTransfersProvider(
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
            const cacheKey = `conflux:espace:confluxscan:top_token_transfers`;

            try {
                const cachedStat = (await cache.get(cacheKey)) as string;
                if (cachedStat) {
                    return cachedStat;
                }

                const stat = await confluxScan.getFormattedTopTokenTransfers();
                const statText = `Top Token Transfers:\n${stat}`;

                await cache.set(cacheKey, statText, { expires: 21600 });
                return statText;
            } catch (error) {
                elizaLogger.error("Error in eSpace Top Token Transfers provider:", error);
                return null;
            }
        },
    };
}

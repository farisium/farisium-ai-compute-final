import { REWARD_CACHE } from "@/data/rewards";

export type GpuVendor = "NVIDIA" | "AMD";

export interface GpuRewardEntry {
  id: string;
  name: string;
  vendor: GpuVendor;
  weeklyRewardUsd: number;
  confidence: "synced" | "cached" | "estimated";
  eligible: boolean;
}

export interface RewardSyncMetadata {
  source: string;
  syncLayer: string;
  formula: string;
  cachedAt: string;
  nextSyncHint: string;
}

export interface RewardPayload {
  architecture: string[];
  metadata: RewardSyncMetadata;
  rewards: GpuRewardEntry[];
}

export interface RewardProvider {
  name: string;
  getRewards(): Promise<RewardPayload>;
}

function createPayload(rewards: GpuRewardEntry[], source: string): RewardPayload {
  return {
    architecture: ["Static JSON", "Reward Service", "Farisium Formula", "Frontend"],
    metadata: {
      source,
      syncLayer: "prepared-for-future-serverless-sync",
      formula: "farisium-weekly-reward-v1",
      cachedAt: new Date().toISOString(),
      nextSyncHint: "Ready to connect to a Vercel serverless sync job later",
    },
    rewards,
  };
}

export class StaticJsonRewardProvider implements RewardProvider {
  name = "static-json";

  async getRewards(): Promise<RewardPayload> {
    const response = await fetch("/data/rewards.json", { headers: { accept: "application/json" } });
    if (!response.ok) throw new Error(`Reward data failed: ${response.status}`);
    return (await response.json()) as RewardPayload;
  }
}

export class CachedRewardProvider implements RewardProvider {
  name = "in-app-cache";

  async getRewards(): Promise<RewardPayload> {
    return createPayload(REWARD_CACHE, this.name);
  }
}

export class FutureServerlessRewardProvider implements RewardProvider {
  name = "future-vercel-serverless-adapter";

  async getRewards(): Promise<RewardPayload> {
    return createPayload(REWARD_CACHE.map((reward) => ({ ...reward, confidence: "cached" })), this.name);
  }
}

export function createRewardProvider(): RewardProvider {
  return typeof window === "undefined" ? new CachedRewardProvider() : new StaticJsonRewardProvider();
}

export async function getRewardPayload(provider = createRewardProvider()) {
  return provider.getRewards();
}

export function listCachedRewards() {
  return REWARD_CACHE;
}

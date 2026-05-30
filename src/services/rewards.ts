import {
  getRewardPayload,
  listCachedRewards,
  type GpuRewardEntry,
  type GpuVendor,
  type RewardPayload,
} from "./reward-provider";

export type { GpuRewardEntry, GpuVendor, RewardPayload };

export async function fetchGpuRewards(): Promise<GpuRewardEntry[]> {
  try {
    const payload = await getRewardPayload();
    return payload.rewards;
  } catch {
    return listCachedRewards();
  }
}

export function getGpuRewardById(id: string): GpuRewardEntry | undefined {
  return listCachedRewards().find((g) => g.id === id);
}

export function listGpuRewards(): GpuRewardEntry[] {
  return listCachedRewards();
}

import type { GpuRewardEntry } from "@/services/reward-provider";

export const REWARD_CACHE: GpuRewardEntry[] = [
  { id: "rtx2080", name: "RTX 2080", vendor: "NVIDIA", weeklyRewardUsd: 6, confidence: "cached", eligible: true },
  { id: "rtx2080s", name: "RTX 2080 Super", vendor: "NVIDIA", weeklyRewardUsd: 7, confidence: "cached", eligible: true },
  { id: "rtx3060", name: "RTX 3060", vendor: "NVIDIA", weeklyRewardUsd: 8, confidence: "cached", eligible: true },
  { id: "rtx3060ti", name: "RTX 3060 Ti", vendor: "NVIDIA", weeklyRewardUsd: 10, confidence: "cached", eligible: true },
  { id: "rtx3070", name: "RTX 3070", vendor: "NVIDIA", weeklyRewardUsd: 12, confidence: "cached", eligible: true },
  { id: "rtx3070ti", name: "RTX 3070 Ti", vendor: "NVIDIA", weeklyRewardUsd: 14, confidence: "cached", eligible: true },
  { id: "rtx3080", name: "RTX 3080", vendor: "NVIDIA", weeklyRewardUsd: 18, confidence: "cached", eligible: true },
  { id: "rtx3080ti", name: "RTX 3080 Ti", vendor: "NVIDIA", weeklyRewardUsd: 20, confidence: "cached", eligible: true },
  { id: "rtx3090", name: "RTX 3090", vendor: "NVIDIA", weeklyRewardUsd: 24, confidence: "cached", eligible: true },
  { id: "rtx3090ti", name: "RTX 3090 Ti", vendor: "NVIDIA", weeklyRewardUsd: 26, confidence: "cached", eligible: true },
  { id: "rtx4070", name: "RTX 4070", vendor: "NVIDIA", weeklyRewardUsd: 22, confidence: "cached", eligible: true },
  { id: "rtx4080", name: "RTX 4080", vendor: "NVIDIA", weeklyRewardUsd: 32, confidence: "cached", eligible: true },
  { id: "rtx4090", name: "RTX 4090", vendor: "NVIDIA", weeklyRewardUsd: 48, confidence: "cached", eligible: true },
  { id: "rtx5070", name: "RTX 5070", vendor: "NVIDIA", weeklyRewardUsd: 28, confidence: "estimated", eligible: true },
  { id: "rtx5080", name: "RTX 5080", vendor: "NVIDIA", weeklyRewardUsd: 42, confidence: "estimated", eligible: true },
  { id: "rtx5090", name: "RTX 5090", vendor: "NVIDIA", weeklyRewardUsd: 60, confidence: "estimated", eligible: true },
  { id: "rx7900xt", name: "RX 7900 XT", vendor: "AMD", weeklyRewardUsd: 18, confidence: "cached", eligible: true },
  { id: "rx7900xtx", name: "RX 7900 XTX", vendor: "AMD", weeklyRewardUsd: 22, confidence: "cached", eligible: true },
  { id: "rx9070", name: "RX 9070", vendor: "AMD", weeklyRewardUsd: 20, confidence: "estimated", eligible: true },
  { id: "rx9070xt", name: "RX 9070 XT", vendor: "AMD", weeklyRewardUsd: 24, confidence: "estimated", eligible: true },
];

export type ChainInfo = {
  chainId: number,
  disperseAddress: string,
  blockExplorer: string,
  name: string,
};

export const supportedChains: ChainInfo[] = [
  {
    chainId: 42220,
    disperseAddress: "0x03C3Ac0F5A3B06eEa45eb0f4F72A46D9Fab4eeEd",
    blockExplorer: "https://celoscan.io/",
    name: "celo",
  },

];

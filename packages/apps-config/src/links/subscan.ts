// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import { externalLogos } from '../ui/logos';

export default {
  chains: {
    'Acala Mandala TC5': 'acala-testnet',
    'Ares Gladios': 'ares-testnet',
    Bifrost: 'bifrost',
    Calamari: 'calamari',
    'Centrifuge Mainnet': 'centrifuge',
    ChainX: 'chainx',
    'Crust Maxwell': 'crust',
    Darwinia: 'darwinia',
    'Darwinia Crab': 'crab',
    Edgeware: 'edgeware',
    Equilibrium: 'equilibrium',
    'KILT Peregrine': 'kilt-testnet',
    'KILT Spiritnet': 'spiritnet',
    Karura: 'karura',
    Khala: 'khala',
    Kulupu: 'kulupu',
    Kusama: 'kusama',
    'Laminar Turbulence TC2': 'laminar-testnet',
    Moonbase: 'moonbase',
    Moonriver: 'moonriver',
    'Phala PoC-4': 'phala',
    Plasm: 'plasm',
    Polkadot: 'polkadot',
    Rococo: 'rococo',
    SORA: 'sora',
    'Shibuya Testnet': 'shibuya',
    Shiden: 'shiden',
    Stafi: 'stafi',
    Statemine: 'statemine',
    Subgame: 'subgame',
    Uniarts: 'uniarts',
    Westend: 'westend'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://${chain}.subscan.io/${path}/${data.toString()}`,
  isActive: true,
  logo: externalLogos.subscan as string,
  paths: {
    address: 'account',
    block: 'block',
    council: 'council',
    extrinsic: 'extrinsic',
    proposal: 'democracy_proposal',
    referendum: 'referenda',
    techcomm: 'tech',
    treasury: 'treasury',
    validator: 'validator'
  },
  url: 'https://subscan.io/'
};

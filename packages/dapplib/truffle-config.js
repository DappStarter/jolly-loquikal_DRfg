require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strategy dash shift pudding hidden arena army gesture'; 
let testAccounts = [
"0x16e134e0023ceb0eacf4ac87aad639b59fcb50a58f667432326fdcc8432c29bb",
"0x518c2cbb94db32dedbeeff34f0d5c14f545e87ec77478bb941ad905172e096c0",
"0x6da88d1714f7deddbaf11ff6a74cd21dcab8c42d323ec1993c2c4d695bfc5d60",
"0x5ed42fd28b1d2492fa3d4f160d0d09b59e67b600936a4dee6cd9b0d6eb9c16e7",
"0x0f909ccc31d75159fbdaa37fe5c5fefad2c549a262c3c0fcb5d405a205876dff",
"0x3783c2d5cfd2e04f4d41ad42fd98d5627565f487599b3acca1c6c73fff9670e2",
"0x7f8a6da5a157d40d220eb54663e5047a4bb3306e8011b31cdee2d88d558a0a64",
"0x1053277535af3c3a0790ee0a2d457e30d65476e59b5f0da65dbf99d8fdd4ed1a",
"0x4ac46322be4ca90b2eb00a0c7cfd2f92db661b5466f9bf222a0bcb71e1d6591e",
"0xec4b9230ce403b9218b464edcf5f3f51bba3861a601e93df9d35d94c0610c6db"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note ranch proud include clip bottom ghost'; 
let testAccounts = [
"0x6b56020c80ea8a2864b5a6af08c3940c206e8852e0d00c46ecc96c205c256053",
"0x61afaa6319e1f0090947061c23b17c4239e7de7e7c6f7c59c414b07926cad6ca",
"0xd01cdbae0448d06548bbf90a203e6cd771a29e985dd88d01d81b15fcbe01af58",
"0xa464a0482668bafdef8792ed8dc0025117e119d65d15c0695cff000c1cfe8909",
"0x772f6a1bbc44117f7561b9bcfaab78ff389d4b2b210862e7c08f7d584894c379",
"0x081003245ef3864eb0ab9951631cdcde54551cda70b5348d5bdd0660d3b420cb",
"0x7829be5dc8ad1af23226cb76cbb51920ec1a69d6f58e4b5c4a9b8e0404969b5d",
"0x85f1ad1a7800f0e83f6823ad646e546bf56cc4fa981a6da1dd4fed0e63111bdf",
"0xac825ac2008ed3b5680dadffbeeddbff64a447bba1526e6ede3c71844848e05c",
"0x625855f2e7c3e219f54569e5c4a37ee2046cede75265a3b843723bc0c00aea67"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

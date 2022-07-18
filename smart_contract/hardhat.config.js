// https://eth-rinkeby.alchemyapi.io/v2/gi1aCusR1JhgXOq6QV1mIwVxz0g_pwaq


require('@nomiclabs/hardhat-waffle')

module.exports = {
    solidity: '0.8.0',
    networks: {
        rinkeby: {
            url: 'https://eth-rinkeby.alchemyapi.io/v2/gi1aCusR1JhgXOq6QV1mIwVxz0g_pwaq',
            accounts: ['af0fc89c6e854a83858f6941143e982150af53d509b5672670976e9e590d9159']
        }
    }
}
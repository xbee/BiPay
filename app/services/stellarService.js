import baseServiceStellar from './baseServiceStellar'

var stellarService = {

  sendMoney: (amount, memo, reference, currency, account) => {
    var data = {
      amount,
      memo,
      reference,
      currency,
      account,
    }
    return baseServiceStellar.post('transactions/send/', data)
  },

  getAddress: () => {
    return baseServiceStellar.post('user/account/', data)
  },

  setUsername: (username) => {
    var data = {
      username,
    }
    return baseServiceStellar.post('/user/username/set/', data)
  },
}

export default stellarService

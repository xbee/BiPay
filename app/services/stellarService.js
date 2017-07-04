import BaseService from './baseService'

var stellarService = {

  sendMoney: (amount, memo, reference, currency, account) => {
    var data = {
      amount,
      memo,
      reference,
      currency,
      account,
    }
    return BaseService.post('transactions/send/', data)
  },

  getAddress: () => {
    return BaseService.post('user/account/', data)
  },

  setUsername: (username) => {
    var data = {
      username,
    }
    return BaseService.post('/user/username/set/', data)
  },
}

export default stellarService

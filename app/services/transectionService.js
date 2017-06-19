import BaseService from './baseService'

var transectionService = {
  getAllTransections: () => {
    return BaseService.get('transactions/')
  },

  getNextTransections: (url) => {
    return BaseService.getWithFullUrl(url)
  },

  sendMoney: (amount, recipient, note) => {
    var data = {
      amount,
      recipient,
      note,
    }
    return BaseService.post('transactions/transfer/', data)
  },

  withdraw: (amount, reference) => {
    var data = {
      amount,
      reference,
    }
    return BaseService.post('transactions/debit/', data)
  },
}

export default transectionService

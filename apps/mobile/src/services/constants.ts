export const BILL_STATUS = {
  payed: {
    statusClassName: 'bg-green-500',
    statusContent: 'Your split is paid'
  },
  pending: {
    statusClassName: 'bg-orange-500',
    statusContent: 'Your split is unpaid'
  },
  cancelled: {
    statusClassName: 'bg-neutral-300',
    statusContent: 'Split cancelled'
  }
}

export const SPLIT_STATUS = {
  payed: {
    statusClassName: 'bg-green-500',
    statusContent: 'Everyone paid'
  },
  pending: {
    statusClassName: 'bg-orange-500',
    statusContent: 'Waiting payment'
  },
  cancelled: {
    statusClassName: 'bg-neutral-300',
    statusContent: 'Cancelled split'
  }
}

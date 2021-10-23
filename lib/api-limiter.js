const MAX_REQUEST_PEER_SECOND = 25

class ApiLimiter {
  constructor() {
    if (ApiLimiter._instance) {
      return ApiLimiter._instance
    }

    ApiLimiter._instance = this
    this.ipsDict = new Map()
    this.blackIps = new Set()
  }

  isInBlackList(ip) {
    return this.blackIps.has(ip)
  }

  updateRequestLimit(ip) {
    if (
      this.ipsDict.has(ip) &&
      new Date().getTime() - this.ipsDict.get(ip).time.getTime() < 1000
    )
      if (this.ipsDict.get(ip).count > MAX_REQUEST_PEER_SECOND) {
        this.blackIps.add(ip)
      } else this.ipsDict.get(ip).count = this.ipsDict.get(ip).count + 1
    else this.ipsDict.set(ip, { time: new Date(), count: 1 })
  }
}

export default ApiLimiter

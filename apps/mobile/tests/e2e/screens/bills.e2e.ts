import { by, device, element, expect } from 'detox'

describe('Bills Screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('loads app', async () => {
    await expect(element(by.id('bill-screen'))).toExist()
  })
})

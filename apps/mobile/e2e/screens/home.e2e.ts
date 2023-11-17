import { by, device, element, expect } from 'detox'

describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('shows home screen', async () => {
    await expect(element(by.id('home-screen'))).toExist()
  })

  it('opens home screen with deep link', async () => {
    await device.openURL({ url: 'splitter://home' })
    await expect(element(by.id('home-screen'))).toExist()
  })

  it('navigates to profile tab', async () => {
    await element(by.id('profile-tab')).tap()
    await expect(element(by.id('profile-screen'))).toExist()
  })

  it('opens profile screen with deep link', async () => {
    await device.openURL({ url: 'splitter://profile' })
    await expect(element(by.id('profile-screen'))).toExist()
  })

  it('navigates to settings tab', async () => {
    await element(by.id('settings-tab')).tap()
    await expect(element(by.id('settings-screen'))).toExist()
  })

  it('opens settings screen with deep link', async () => {
    await device.openURL({ url: 'splitter://settings' })
    await expect(element(by.id('settings-screen'))).toExist()
  })

  it('navigates to create bills screen', async () => {
    await element(by.id('bills-create-button')).tap()
    await expect(element(by.id('create-bill-screen'))).toExist()
  })

  it('opens create bills screen with deep link', async () => {
    await device.openURL({ url: 'splitter://bills/create' })
    await expect(element(by.id('create-bill-screen'))).toExist()
  })
})

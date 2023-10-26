import { requireNativeModule } from 'expo-modules-core'

const SplitWidgetExtension = requireNativeModule('ReactNativeWidgetExtension')

type Activities = Array<{ id: string }>

type SplitLiveActivityState = {
  title: string
  subtitle: string
  icon: string
  progress: number // max 1
}

async function start(state: SplitLiveActivityState) {
  return await new Promise<void>((resolve) => {
    SplitWidgetExtension.startActivity(
      state.title,
      state.icon,
      state.progress,
      state.subtitle
    )

    resolve()
  })
}

async function listAll() {
  return await new Promise<Activities>((resolve) => {
    const activities: Activities = SplitWidgetExtension.listAllActivities()

    if (!activities) return resolve([])

    resolve(activities)
  })
}

async function update(id: string, state: SplitLiveActivityState) {
  return await new Promise<void>((resolve) => {
    SplitWidgetExtension.updateActivity(
      id,
      state.title,
      state.icon,
      state.progress,
      state.subtitle
    )
    resolve()
  })
}

async function end(id: string) {
  return await new Promise<void>((resolve) => {
    SplitWidgetExtension.endActivity(id)
    resolve()
  })
}

const SplitLiveActivity = {
  start,
  listAll,
  update,
  end
}

export default SplitLiveActivity

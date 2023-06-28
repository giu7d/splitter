import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

function getItem<T>(key: string): T | null {
  const value = storage.getString(key)
  return value ? JSON.parse(value) : null
}

function setItem<T>(key: string, value: T): void {
  storage.set(key, JSON.stringify(value))
}

function removeItem(key: string): void {
  storage.delete(key)
}

function clearAll(): void {
  storage.clearAll()
}

const Storage = {
  getItem,
  setItem,
  removeItem,
  clearAll
}

export default Storage

import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import Storage from '@/services/storage/mmkv'

const atomWithMMKV = <T>(key: string, initialValue: T) =>
  atomWithStorage<T>(
    key,
    initialValue,
    createJSONStorage<T>(() => ({
      getItem: Storage.getItem,
      setItem: Storage.setItem,
      removeItem: Storage.removeItem,
      clearAll: Storage.clearAll
    }))
  )

export const isMainTemplateScrolledAtom = atom(false)

export const isDrawerVisibleAtom = atom(false)

export const authenticationAtom = atomWithMMKV('auth', {
  firstName: '',
  lastName: '',
  username: '',
  token: ''
})

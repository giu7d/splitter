/// <reference types="nativewind/types" />

declare module '*.png'

type Bill = {
  name: string
  totalValue: string
  splitValue: string
  numberOfSplit: number
  isPayed: boolean
}

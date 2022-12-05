/// <reference types="nativewind/types" />

declare module '*.png'

interface Bill {
  name: string
  totalValue: string
  splitValue: string
  numberOfSplit: number
  isPayed: boolean
}

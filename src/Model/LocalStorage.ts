import { List } from 'Model/LocalStorage.types'

const STORAGE_NAME = 'List'

export function load (): List {
  const data: string | null = localStorage.getItem(STORAGE_NAME)
  if (data) {
    return JSON.parse(data)
  }
  save([])
  return []
}

export function save (storage: List): List {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(storage))
  return storage
}


import { save, load } from 'Model/LocalStorage'
import { List } from 'Model/LocalStorage.types'
import { Entry, Index } from 'Controller/Crud.types'

export function addEntry (storage: List, value: Entry = ''): List {
  storage.push(value)
  return save(storage)
}

export function removeEntry (index: Index, storage: List): List {
  if (typeof storage[index] !== undefined) {
    storage.splice(index, 1)
    return save(storage)
  }
  return storage
}

export function updateEntry (index: Index, value: Entry, storage: List): List {
  if (typeof storage[index] !== undefined) {
    storage[index] = value
    return save(storage)
  }
  return storage
}

export function clearStorage (storage: List): List {
  storage = []
  save(storage)
  return storage
}

export function loadStorage (): List {
  return load()
}

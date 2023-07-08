import dataDefault from "./dataTest";
const keyStorage = 'tintascarol';

export function getData() {
  let data = localStorage.getItem(keyStorage)
  if (data === null) {
    localStorage.setItem(keyStorage, JSON.stringify(dataDefault()))
    console.log('criado o storage')
  }
  console.log('retornado o storage')
  return JSON.parse(localStorage.getItem(keyStorage));
}

export function replaceData(dataUpdated) {
  localStorage.setItem(keyStorage, JSON.stringify(dataUpdated))
  return 'ok';
}

export function setQtd(id, newQtd) {
  const data = getData()
  const filtered = data.filter((e) => e.code === id)[0]
  const other = data.filter((e) => e.code !== id)
  filtered.qtd = newQtd
  replaceData([...other, filtered].sort((a, b) => a.code - b.code))
}

export function setMostUsed(id, filter) {
  console.log(filter)
  if (filter !== 'storage') return
  const data = getData()
  const filtered = data.filter((e) => e.code === id)[0]
  const other = data.filter((e) => e.code !== id)
  filtered['frequecyUsed'] += 1;
  console.log(filtered)
  replaceData([...other, filtered].sort((a, b) => a.code - b.code))
}

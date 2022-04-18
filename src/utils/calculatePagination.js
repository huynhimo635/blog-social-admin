export const getListPerPage = (list, perPage, curPage) => {
  return list.slice(curPage * perPage, perPage + curPage * perPage)
}

export const getTotalPage = (size, perPage) => {
  return Math.ceil(size / perPage - 1)
}

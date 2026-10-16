import axiosInstance from './axiosInstance'

export const getPokemon = async ({ limit, offset, signal }) => {
  const response = await axiosInstance.get('/pokemon', {
    params: { limit, offset },
    signal,
  })
  return response.data
}

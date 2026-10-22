import { useMutation } from '@tanstack/react-query'
import { loginUser, registerUser } from '../api/authApi.js'

function useAuthApi() {
  const registerMutation = useMutation({
    mutationFn: registerUser,
  })
  const loginMutation = useMutation({
    mutationFn: loginUser,
  })
  return {
    registerMutation,
    loginMutation,
  }
}

export default useAuthApi

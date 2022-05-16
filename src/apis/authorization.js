import { apiHelper } from './../utility/helpers'

export default {
  signIn({ account, password }) {
    return apiHelper.post('/api/signin', {
      account,
      password
    })
  }
}
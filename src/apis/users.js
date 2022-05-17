import { apiHelper } from './../utility/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getUser(id) {
    return apiHelper.get(`/api/users/${id}`, {
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  },
  getUserTweets({id}) {
    return apiHelper.get(`/api/users/${id}/tweets`, {
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  }

}
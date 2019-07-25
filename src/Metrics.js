const fetch = require('cross-fetch')
class Metrics {
  static async checkUser (user) {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`)

      if (!response.status === 200) throw new Error()

      return {
        status: 200,
        validUser: true,
      }
    } catch (e) {
      return {
        status: 200,
        validUser: false,
      }
    }
  }

  static async getUserInfo (user) {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`)

      if (!response.status === 200) throw new Error('Could not find user.')

      const parsedResponse = await response.json()

      return {
        status: 200,
        info: {
          avatar: parsedResponse.avatar_url,
          login: parsedResponse.login,
          name: parsedResponse.name,
          location: parsedResponse.location,
          url: parsedResponse.html_url,
          res: parsedResponse,
        },
      }
    } catch (e) {
      return {
        status: 400,
        message: `Erro fetching user basic info, ${e.message}`,
      }
    }
  }

  // static async getUserDashboard (user) {
  // }
}

module.exports = Metrics

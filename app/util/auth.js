import { AsyncStorage } from 'react-native'
import resetNavigation from './resetNavigation'

const auth = {
  login: async (navigation, loginInfo) => {
    console.log()
    await AsyncStorage.setItem("token", loginInfo.token)
    await AsyncStorage.setItem("user", JSON.stringify(loginInfo.user))
    await resetNavigation.dispatchToSingleRoute(navigation, "Home")
  },
  logout: async (navigation) => {
    await AsyncStorage.clear()
    await resetNavigation.dispatchToSingleRoute(navigation, "Login")
  },
}

export default auth

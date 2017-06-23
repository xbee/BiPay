import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import Home from './../screens/home/home'
import Deposit from './../screens/deposit/deposit'
import Settings from './../screens/settings/settings'
import Withdraw from './../screens/withdraw/withdraw'
import About from './../screens/about/about'
import Accounts from './../screens/accounts/accounts'
import Receive from './../screens/receive/receive'
import Logout from './../screens/auth/logout'
import DrawerButton from './../components/drawerButton'
import DrawerHeader from './../components/drawerHeader'

const RouteConfigs = {
  Home: {
    screen: Home,
  },
  Deposit: {
    screen: Deposit,
  },
  Withdraw: {
    screen: Withdraw,
  },
  Receive: {
    screen: Receive,
  },
  Accounts: {
    screen: Accounts,
  },
  Settings: {
    screen: Settings,
  },
  About: {
    screen: About,
  },
  Logout: {
    screen: Logout,
  },
}

const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <DrawerHeader />
    <ScrollView>
      <DrawerItems
        {...props}
        activeTintColor="white"
        activeBackgroundColor="#3C8DBC"
        inactiveTintColor="white"
        inactiveBackgroundColor="transparent"
        labelStyle={{ margin: 15, alignItems: 'center', fontSize: 18, fontWeight: 'normal' }}
      />
    </ScrollView>
  </View>
)

export default DrawerNavigator(RouteConfigs, {
  drawerWidth: 300,
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    headerLeft: <DrawerButton navigation={navigation} />,
    headerTintColor: 'white',
  }),
  contentComponent: CustomDrawerContentComponent,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2070A0',
  },
})

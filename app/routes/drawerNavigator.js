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

export default DrawerNavigator(RouteConfigs, {
  drawerWidth: 300,
  navigationOptions: ({ navigation }) => ({
    headerLeft: <DrawerButton navigation={navigation} />,
    headerTintColor: 'white',
  }),
  contentComponent: (props, navigation) => (
    <View style={styles.container}>
      <DrawerHeader navigation={navigation} />
      <ScrollView>
        <DrawerItems
          {...props}
          activeTintColor="#C0C9CF"
          activeBackgroundColor="#3D95CE"
          inactiveTintColor="#C0C9CF"
          inactiveBackgroundColor="transparent"
          labelStyle={{ margin: 15, alignItems: 'center', fontSize: 16, fontWeight: 'normal', color: "#C0C9CF"}}
        />
      </ScrollView>
    </View>
  ),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D95CE',
  },
})

import React from 'react'
import Expo from 'expo'
import { ScrollView, View, StyleSheet } from 'react-native'
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation'
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

const Stack = {
	Home: {
		screen: Home
	},
	Deposit: {
		screen: Deposit
	},
	Settings: {
		screen: Settings
	}
};

const HomeStackNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3C8DBC',
        paddingTop: Expo.Constants.statusBarHeight,
        height: 55 + Expo.Constants.statusBarHeight,
        borderColor: '#3C8DBC',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        elevation: 0,
      },
      headerTintColor: 'white'
    }
  }});

const RouteConfigs = {
  HomeStack: {
    name: 'HomeStack',
    screen: StackNavigator(Stack, { initialRouteName: 'Home' })
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
        activeBackgroundColor="#2070A0"
        inactiveTintColor="white"
        inactiveBackgroundColor="transparent"
        labelStyle={{ margin: 15, alignItems: 'center', fontSize: 18, fontWeight: 'normal' }}
      />
    </ScrollView>
  </View>
)

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
          activeTintColor="white"
          activeBackgroundColor="#3C8DBC"
          inactiveTintColor="white"
          inactiveBackgroundColor="transparent"
          labelStyle={{ margin: 15, alignItems: 'center', fontSize: 18, fontWeight: 'normal' }}
        />
      </ScrollView>
    </View>
  ),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C8DBC',
  },
})

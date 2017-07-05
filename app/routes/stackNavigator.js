import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Expo from 'expo'
import React from 'react'

import { ScrollView, View, StyleSheet } from 'react-native'

import DrawerButton from './../components/drawerButton'
import DrawerHeader from './../components/drawerHeader'
import DrawerOption from './../components/drawerOption'

import Home from './../screens/home/home'
import Deposit from './../screens/deposit/deposit'
import Settings from './../screens/settings/settings'
import Withdraw from './../screens/withdraw/withdraw'
import About from './../screens/about/about'
import Accounts from './../screens/accounts/accounts'
import Receive from './../screens/receive/receive'
import Logout from './../screens/auth/logout'

import Login from './../screens/auth/login'
import Signup from './../screens/auth/signup'
import AuthVerifyMobile from './../screens/auth/verifyMobile'
import ForgetPassword from './../screens/auth/forgetPassword'
import BankAccounts from './../screens/withdraw/bankAccounts'
import BitcoinAddresses from './../screens/withdraw/bitcoinAddresses'
import WithdrawalAmountEntry from './../screens/withdraw/amountEntry'
import SendMoney from './../screens/transfer/amountEntry'
import SendTo from './../screens/transfer/sendTo'
import QRcodeScanner from './../screens/transfer/qrcodeScanner'
import AccountCurrencies from './../screens/accounts/accountCurrencies'
import SettingsProfileImage from './../screens/settings/profileImage/profileImage'
import UploadImage from './../screens/settings/profileImage/uploadImage'
import SettingsPersonalDetails from './../screens/settings/personalDetails'
import SettingsMobileNumbers from './../screens/settings/mobileNumbers/mobileNumbers'
import AddMobileNumber from './../screens/settings/mobileNumbers/addMobileNumber'
import VerifyMobileNumber from './../screens/settings/mobileNumbers/verifyMobile'
import SettingsEmailAddresses from './../screens/settings/emailAddresses/emailAddresses'
import AddEmailAddress from './../screens/settings/emailAddresses/addEmailAddress'
import SettingsGetVerified from './../screens/settings/getVerified/getVerified'
import Document from './../screens/settings/getVerified/document'
import DocumentUpload from './../screens/settings/getVerified/documentUpload'
import SettingsAddress from './../screens/settings/address'
import SettingsBankAccounts from './../screens/settings/bankAccounts/bankAccounts'
import SettingsBitcoinAddresses from './../screens/settings/bitcoinAddresses/bitcoinAddresses'
import AddBankAccount from './../screens/settings/bankAccounts/addBankAccount'
import EditBankAccount from './../screens/settings/bankAccounts/editBankAccount'
import AddBitcoinAddress from './../screens/settings/bitcoinAddresses/addBitcoinAddress'
import EditBitcoinAddress from './../screens/settings/bitcoinAddresses/editBitcoinAddress'
import SettingsCards from './../screens/settings/cards'
import SettingsSecurity from './../screens/settings/security/security'
import ChangePassword from './../screens/settings/security/changePassword'
import TwoFactor from './../screens/settings/security/twoFactor'
import SettingsNotifications from './../screens/settings/notifications/notifications'
import EmailNotifications from './../screens/settings/notifications/emailNotifications'
import MobileNotifications from './../screens/settings/notifications/mobileNotifications'

import Colors from './../config/colors'

const Stack = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  },
  Deposit: {
    screen: Deposit,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  },
  Withdraw: {
    screen: Withdraw,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  },
  Receive: {
    screen: Receive,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  },
  Accounts: {
    screen: Accounts,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  },
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  },
  Logout: {
    screen: Logout,
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  AuthVerifyMobile: {
    screen: AuthVerifyMobile,
  },
  ForgetPassword: {
    screen: ForgetPassword,
  },
  BankAccounts: {
    screen: BankAccounts,
  },
  BitcoinAddresses: {
    screen: BitcoinAddresses,
  },
  WithdrawalAmountEntry: {
    screen: WithdrawalAmountEntry,
  },
  SendMoney: {
    screen: SendMoney,
  },
  SendTo: {
    screen: SendTo,
  },
  QRcodeScanner: {
    screen: QRcodeScanner,
  },
  AccountCurrencies: {
    screen: AccountCurrencies,
  },
  SettingsProfileImage: {
    screen: SettingsProfileImage,
  },
  UploadImage: {
    screen: UploadImage,
  },
  SettingsPersonalDetails: {
    screen: SettingsPersonalDetails,
  },
  SettingsMobileNumbers: {
    screen: SettingsMobileNumbers,
  },
  AddMobileNumber: {
    screen: AddMobileNumber,
  },
  VerifyMobileNumber: {
    screen: VerifyMobileNumber,
  },
  SettingsEmailAddresses: {
    screen: SettingsEmailAddresses,
  },
  AddEmailAddress: {
    screen: AddEmailAddress,
  },
  SettingsGetVerified: {
    screen: SettingsGetVerified,
  },
  Document: {
    screen: Document,
  },
  DocumentUpload: {
    screen: DocumentUpload,
  },
  SettingsAddress: {
    screen: SettingsAddress,
  },
  SettingsBankAccounts: {
    screen: SettingsBankAccounts,
  },
  SettingsBitcoinAddresses: {
    screen: SettingsBitcoinAddresses,
  },
  AddBankAccount: {
    screen: AddBankAccount,
  },
  EditBankAccount: {
    screen: EditBankAccount,
  },
  AddBitcoinAddress: {
    screen: AddBitcoinAddress,
  },
  EditBitcoinAddress: {
    screen: EditBitcoinAddress,
  },
  SettingsCards: {
    screen: SettingsCards,
  },
  SettingsSecurity: {
    screen: SettingsSecurity,
  },
  ChangePassword: {
    screen: ChangePassword,
  },
  TwoFactor: {
    screen: TwoFactor,
  },
  SettingsNotifications: {
    screen: SettingsNotifications,
  },
  EmailNotifications: {
    screen: EmailNotifications,
  },
  MobileNotifications: {
    screen: MobileNotifications,
  },
}

const StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.lightblue,
    paddingTop: Expo.Constants.statusBarHeight,
    height: 55 + Expo.Constants.statusBarHeight,
    borderColor: Colors.lightblue,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
  headerTintColor: 'white',
}

const DrawerRoutes = {
  Home: {
    name: 'HomeStack',
    screen: StackNavigator(Stack, {
      initialRouteName: 'Home',
      navigationOptions: StackNavigationOptions,
    }),
  },
  Deposit: {
    name: 'DepositStack',
    screen: StackNavigator(Stack, {
      initialRouteName: 'Deposit',
      navigationOptions: StackNavigationOptions,
    }),
  },
  Withdraw: {
    name: 'WithdrawStack',
    screen: StackNavigator(Stack, {
      initialRouteName: 'Withdraw',
      navigationOptions: StackNavigationOptions,
    }),
  },
  Receive: {
    name: 'ReceiveStack',
    screen: StackNavigator(Stack, {
      initialRouteName: 'Receive',
      navigationOptions: StackNavigationOptions,
    }),
  },
  Accounts: {
    name: 'AccountsStack',
    screen: StackNavigator(Stack, {
      initialRouteName: 'Accounts',
      navigationOptions: StackNavigationOptions,
    }),
  },
  Settings: {
    name: 'SettingsStack',
    screen: StackNavigator(Stack, {
      initialRouteName: 'Settings',
      navigationOptions: StackNavigationOptions,
    }),
  },
  About: {
    name: 'AboutStack',
    screen: StackNavigator(Stack, {
      initialRouteName: 'About',
      navigationOptions: StackNavigationOptions,
    }),
  },
  Logout: {
    name: 'Logout',
    screen: Logout,
  },
};


export default StackNavigator({
  Drawer: {
    name: 'Drawer',
    screen: DrawerNavigator(
      DrawerRoutes, {
        contentComponent: (props) => (
          <View style={styles.container}>
            <DrawerHeader navigation={props.navigation} />
            <ScrollView >
              <DrawerOption name="Home" gotoAddress="Home" navigation={props.navigation} />
              <DrawerOption name="Deposit" gotoAddress="Deposit" navigation={props.navigation} />
              <DrawerOption name="Withdraw" gotoAddress="Withdraw" navigation={props.navigation} />
              <DrawerOption name="Receive" gotoAddress="Receive" navigation={props.navigation} />
              <DrawerOption name="Accounts" gotoAddress="Accounts" navigation={props.navigation} />
              <DrawerOption name="Settings" gotoAddress="Settings" navigation={props.navigation} />
              <DrawerOption name="About" gotoAddress="About" navigation={props.navigation} />
              <DrawerOption name="Logout" gotoAddress="Logout" navigation={props.navigation} />
            </ScrollView>
          </View>
        ),
      }
    ),
  },
  ...Stack,
},
  {
    headerMode: 'none',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.drawerColor,
  },
})

import React, { Component } from 'react';
import moment from 'moment'
import {
  View,
  Text,
  FlatList,
} from 'react-native'
import { List, ListItem } from "react-native-elements"
import TransactionService from './../../services/transactionService'

export default class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noTransaction: false,
      loading: false,
      data: [],
      nextUrl: null,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.getData()
    console.log(this.state.data)
  }

  setData = (responseJson) => {
    if (responseJson.status === "success") {
      const data = this.state.data.concat(responseJson.data.results)
      this.setState({
        data,
        nextUrl: responseJson.data.next,
      })
    }
    else {
      this.props.logout()
    }

    if (this.state.data.length === 0) {
       this.setState({noTransaction: true})
    }
  }

  getData = async () => {
    this.setState({
      data: [],
    })
    let responseJson = await TransactionService.getAllTransactions()
    this.setData(responseJson)
  }

  handleRefresh() {
    console.log('refreshing')
    if (this.state.loading !== true) {
      this.setState({refreshing: true});
      this.getData().then(() => {
        this.setState({refreshing: false});
      })
      console.log(this.state.refreshing)
    }
  }


  handleLoadMore = async () => {
    console.log('loadmore')
    console.log(this.state.nextUrl)
    if (this.state.refreshing !== true && this.state.loading !== true && this.state.nextUrl) {
      this.setState({'loading': true})
      let responseJson = await TransactionService.getNextTransactions(this.state.nextUrl)
      this.setData(responseJson)
      this.setState({'loading': false})
    }
  }

  getAmount = (amount, divisibility) => {
    for (let i = 0; i < divisibility; i++) {
      amount = amount / 10
    }

    return amount.toFixed(8).replace(/\.?0+$/, "")
  }

  render() {
    if (this.state.noTransaction) {
      return (
        <View style={{ flex: 1, backgroundColor: '#EBEBEB', padding: 10 }}>
          <View style={{ marginTop:10, flexDirection: 'column', backgroundColor: 'white', padding: 20 }}>
            <Text style={{ fontSize:30, fontWeight: 'normal', color: '#4D4D4D' }}>
              Welcome to Rehive
            </Text>
            <Text style={{ paddingTop:15, fontSize:18, fontWeight: 'normal', color: '#4D4D4D', textAlign: 'justify' }}>
              Please verify your email address to redeem any unclaimed transactions. Pull to refresh your balance.
            </Text>
          </View>
        </View>
      )
    }
    else {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <ListItem
              avatar={item.user.profile || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmT5tM-IGcFDpqZ87p9zKGaWQuzpvAcDKfOTPYfx5A9zOmbTh8RMMFg'}
              title={item.label}
              subtitle={moment(item.created).fromNow()}
              rightTitle={`${item.currency.symbol}${this.getAmount(item.amount, item.currency.divisibility)}`}
              rightTitleStyle={{'color':'#bdc6cf'}}
              hideChevron
              roundAvatar
              //containerStyle={{'backgroundColor':'#FAFBFC'}}
            />
          )}
          keyExtractor={tx => tx.id}
          onRefresh={this.handleRefresh.bind(this)}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore.bind(this)}
          onEndReachedThreshold={50}
        />
      </View>
    )
    }
  }
}

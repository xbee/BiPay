import React, { Component } from 'react';
import moment from 'moment'
import {
  View,
  FlatList,
} from 'react-native'
import { List, ListItem } from "react-native-elements";
import Transaction from './../../components/transaction'
import TransactionService from './../../services/transactionService'

export default class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    return (
      <View style={{ flex: 1 }}>          
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <ListItem
              avatar={item.user.profile || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmT5tM-IGcFDpqZ87p9zKGaWQuzpvAcDKfOTPYfx5A9zOmbTh8RMMFg'}
              title={item.label}
              subtitle={moment(item.created).fromNow()}
              rightTitle={`${item.currency.symbol}${item.amount}`}
              rightTitleStyle={{'color':'#bdc6cf'}}
              hideChevron
              roundAvatar
            />
          )}
          keyExtractor={tx => tx.id}
          onRefresh={this.handleRefresh.bind(this)}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore.bind(this)}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}

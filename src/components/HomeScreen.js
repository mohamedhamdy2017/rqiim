import React , {Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import {fetchingData} from '../actions'
import {Card, CardItem, Body} from 'native-base'


class HomeScreen extends Component {
    state ={
        Fetchdata: []
    }
    componentDidMount(){
        this.props.fetchingData().then(results => this.setState({Fetchdata: results}))
    }
    renderItem = ({item}) => {
        return(
          <Card >
            <CardItem>
              <Body>
                <Text>{this.props.data.title}</Text>
                <Text>Like it? Keep Scrolling...</Text>
              </Body>
            </CardItem>
          </Card>

        )
    }

    render(){
        return( 
            <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
             {this.props.loading? <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><ActivityIndicator size="large" color={'blue'} /></View> :
                <FlatList
                    data={this.props.fetchingData}
                    renderItem ={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
             }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { appData, loading, error } = state.fetch
    return { appData, loading, error }
}

export default connect(mapStateToProps, {fetchingData}) (HomeScreen)
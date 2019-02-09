import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Linking, Share } from 'react-native'
import { Header, Title, Card, CardItem, Body } from 'native-base'
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements'
import { removeFromFavoriteList, retriveData } from '../actions'
import Icon from 'react-native-vector-icons/FontAwesome'



class FavoriteScreen extends Component {
    
    onRemove() {
        this.props.removeFromFavoriteList()
    }

    renderItem = ({ item }) => {
        
        return (
            <Card  style={{ flex: 1, width: '100%', marginBottom: 10, borderWidth: .7, borderRadius: 8 }}>
                <CardItem style={{ borderBottomWidth: .65, borderBottomColor: '#cdcdcd' }}>
                    <Body style={{ alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                    </Body>
                </CardItem>
                <View style={{ flex: 1, flexDirection: 'row' }} >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <CardItem style={{ borderBottomWidth: .65, borderBottomColor: '#cdcdcd' }}>
                            <Body style={{ alignItems: 'flex-end', marginBottom: 3 }}>

                                <Text style={{ fontSize: 16 }}>{item.by}</Text>
                                <Text style={{ fontSize: 12, color: 'gray' }}>{item.content}</Text>
                            </Body>
                            <View style={{ alignItems: 'flex-end', marginLeft: 5 }}>
                                <Avatar
                                    source={{ uri: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/21150374_1492623507497405_3319509272171184040_n.png?_nc_cat=103&_nc_ht=scontent-hbe1-1.xx&oh=9107691184ff8b5f61392b3660e0c29c&oe=5D007970' }}
                                    size="small" />
                            </View>
                        </CardItem>
                    </View>

                </View>
                <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                    <CardItem style={{ borderBottomWidth: .65, borderBottomColor: '#cdcdcd' }}>
                        <Body>
                            <Image source={{ uri: item.image }} style={{ height: 250, width: '100%' }} />
                        </Body>
                    </CardItem>
                </TouchableOpacity>
                <CardItem style={{ borderBottomWidth: .65, borderBottomColor: '#cdcdcd', height: 50 }}>
                    <Body>
                        <Text numberOfLines={2}>{item.details}</Text>
                    </Body>
                </CardItem>
                <CardItem style={{ borderBottomWidth: .65, borderBottomColor: '#cdcdcd' }}>
                    <Body style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() =>
                            Share.share({
                                message: `${item.title} ${item.link}`
                            }).then(() => console.log('Share Success'))
                        }>
                            <Icon name="share" size={20} color='#313c8d' />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity onPress={() => this.onRemove()}>
                                <Icon name="heart" size={20} color='#cc0000' />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#000' }}>{item.likes}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="eye" size={20} color='#000' />
                            <Text style={{ fontSize: 15, marginLeft: 10, color: '#000' }}>{item.views}</Text>
                        </View>
                    </Body>
                </CardItem>

            </Card>

        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#313c8d' }}>
                    <Title>القائمه المفضله</Title>
                </Header>
                {this.props.items ?
                    <FlatList
                        data={this.props.items}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    : null}
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { items } = state.favList;
    return { items }
}
export default connect(mapStateToProps, { removeFromFavoriteList, retriveData })(FavoriteScreen);
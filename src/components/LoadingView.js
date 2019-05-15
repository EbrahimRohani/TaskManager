import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import { connect } from 'react-redux'

class LoadingView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <AnimatedLoader
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={styles.lottie}
                    speed={1}
                    source={require("../animations/data.json")}
                />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    lottie: {
        width: 100,
        height: 100,
    },
});

export default connect(null)(LoadingView)

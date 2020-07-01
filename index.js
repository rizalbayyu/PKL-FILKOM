import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import App from './App';

import TampilanDevice from './pages/TampilanDevice';
import DevicesScreenTerpilih from './pages/DevicesScreenTerpilih';
import DevicesScreenTambah from './pages/DevicesScreenTambah';
import PilihDevice from './pages/PilihDevice';

class myFirstApp extends Component {
    renderScene(route, navigator) {
        console.log(route);
        // konfigurasi route.tite dan route.index sesuai dengan route.name yang dipanggil
        if(route.name == 'root') {
            route.title='Devices';
            route.index=0;
            return <TampilanDevice navigator={navigator} />
        }

        if(route.name == 'devicesscreenterpilih') {
            route.title='List Device / Node';
            route.index=1;
            return <DevicesScreenTerpilih navigator={navigator} />
        }

        if(route.name == 'devicesscreentambah') {
            route.title='List Device / Node';
            route.index=1;
            return <DevicesScreenTambah navigator={navigator} />
        }

        if(route.name == 'pilihdevice') {
            route.title='Pilih Device';
            route.index=2;
            return <PilihDevice navigator={navigator} />
        }
    }

    render() {
        return (
            //memanggil komponen navigator
            <Navigator
                initialRoute={{name: 'root'}}
                renderScene={this.renderScene.bind(this)}
                //mendefinisikan navigatonbar yang akan muncul pada header suatu screen
                navigationBar={
                    <Navigator.NavigationBar style={{paddingTop:Navigator.NavigationBar.Styles.General.TotalNavHeight}}
                        routeMapper={{
                            LeftButton: (route, navigator, index, navState) => {
                                if (route.index === 0) {
                                    return null;
                                    
                                } else {
                                    return (
                                        <TouchableHighlight onPress={() => navigator.pop()}>
                                            <Text style={styles.navbar}>Back</Text>
                                        </TouchableHighlight>
                                    );
                                }
                            },
                            RightButton: (route, navigator, index, navState) => {
                                return (<Text></Text>); },
                            Title: (route, navigator, index, navState) => {
                                return (
                                    <Text style={styles.titlebar}>{route.title}</Text>
                            );
                          },
                        }}
                        configureScene={(route, routeStack) =>
                            Navigator.SceneConfigs.FloatFromBottom}
                    />
                }
            />  
        )
    }
}

const styles = StyleSheet.create({
    titlebar: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },

    navbar: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'blue'
    }
})


//AppRegistry.registerComponent('newProject', () => App);
AppRegistry.registerComponent('myFirstApp', () => myFirstApp);
import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import MainPage from '../main';
import DevicesScreenTambah from './pages/DevicesScreenTambah';
import PilihDevice from './pages/PilihDevice';
import DevicesScreenTerpilih from './pages/DevicesScreenTerpilih';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
                  <Scene key="mainpage" component={MainPage} title="Main Page"/>
				  <Scene key="tambahdevice" component={DevicesScreenTambah} title="Tambah Device"/>
				  <Scene key="pilihdevice" component={PilihDevice} title="Pilih Device"/>
				  <Scene key="tambahdeviceterpilih" component={DevicesScreenTerpilih} title="Pilih Device"/>
			    </Stack>
			 </Router>
		)
	}
}
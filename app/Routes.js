import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import MainPage from '../main';
import PilihDevice from './pages/PilihDevice';
import DevicesScreenTerpilih from './pages/DevicesScreenTerpilih';

export default function Routes() {
	return(
		<Router>
			<Stack key="root" hideNavBar={true}>
				<Scene key="login" component={Login} title="Login" initial={true}/>
				<Scene key="mainpage" component={MainPage} title="Main Page"/>
				<Scene key="pilihdevice" component={PilihDevice} title="Pilih Device"/>
				<Scene key="tambahdeviceterpilih" component={DevicesScreenTerpilih} title="Pilih Device"/>
			</Stack>
		</Router>
	)
}

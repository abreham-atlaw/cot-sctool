import React from "react";
import { Route, Routes } from "react-router";
import CreateAccountView from "./apps/core/presentation/views/CreateAccountView";
import ExecuteView from "./apps/core/presentation/views/ExecuteView";
import MainView from "./apps/core/presentation/views/MainView";


export default class CoTRouter extends React.Component{

	render(): React.ReactNode {

		return (
			<Routes>
                <Route path="" element={<MainView/>}/>
                <Route path="create" element={<CreateAccountView/>}/>
                <Route path="execute" element={<ExecuteView/>}/>
			</Routes>
		)
	}

}
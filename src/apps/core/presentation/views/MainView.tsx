import React from "react";
import CreateAccountView from "./CreateAccountView";
import ExecuteView from "./ExecuteView";



export default class MainView extends React.Component{
    

    render(): React.ReactNode {
        return (
            <div className="flex">
                <div className="w-1/3 p-10">
                    <div className="border border-grey p-10">
                        <CreateAccountView/>
                    </div>
                </div>
                <div className="w-2/3 p-10">
                    <div className="border border-grey p-10">
                        <ExecuteView/>
                    </div>
                </div>
            </div>
        )
    }

}
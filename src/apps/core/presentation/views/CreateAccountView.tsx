import ViewModelView from "../../../../common/components/views/ViewModelView";

import CreateAccountViewModel from "../../application/viewModels/createUserViewModel";
import CreateAccountState from "../../application/states/createUserState";
import { ReactNode } from "react";
import AsyncButton from "@/common/components/buttons/AsyncButton";

export default class CreateAccountView extends ViewModelView<CreateAccountViewModel, unknown, CreateAccountState>{
    
    onCreateViewModel(state: CreateAccountState): CreateAccountViewModel {
        return new CreateAccountViewModel(state, this.setState.bind(this));
    }
    onCreateState(): CreateAccountState {
        return new CreateAccountState();
    }

    onCreateMain(): ReactNode {
        return (
            <div>
                <h1 className="text-3xl">Create Account</h1>
                
                <div
                className="mt-10"
                        onClick={() => this.viewModel.createAccount()}
                >
                    <AsyncButton 
                        state={this.state}
                        >
                            Create Account
                    </AsyncButton>
                </div>

                {
                    (this.state.wallet)?
                    <div className="text-sm mt-10">
                        <p>Public Key: {this.state.wallet!.address}</p>
                        <p className="text-wrap">Private Key: {this.state.wallet!.privateKey}</p>
                    </div>:
                    <></>
                }
                
            </div>
        )
    }
    

}
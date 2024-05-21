import ViewModelView from "@/common/components/views/ViewModelView";
import ExecuteViewModel from "../../application/viewModels/executeViewModel";
import ExecuteState from "../../application/states/executeState";
import { ReactNode } from "react";
import LabeledInputField from "@/common/components/form/LabeledInputField";
import TextFieldComponent, { TextBoxComponent } from "@/common/components/form/TextFieldComponent";
import AsyncButton from "@/common/components/buttons/AsyncButton";
import { FunctionFragment } from "ethers";
import FunctionFragmentSelectionFieldComponent from "../components/FunctionSelectionComponent";
import { AsyncStatus } from "@/common/state/asyncState";



export default class ExecuteView extends ViewModelView<ExecuteViewModel, unknown, ExecuteState>{
   
    onCreateViewModel(state: ExecuteState): ExecuteViewModel {
        return new ExecuteViewModel(state, this.setState.bind(this));
    }
    onCreateState(): ExecuteState {
        return new ExecuteState();
    }

    onCreateMain(): ReactNode {
        return (
            <div className="flex">
                <form className="w-1/2 px-10" onSubmit={(event) => {event.preventDefault(); this.viewModel.getFunctions()}}>
                    <h2 className="text-2xl">Contract</h2>
                    <LabeledInputField label="Address">
                        <TextFieldComponent field={this.state.contractForm.address}/>
                    </LabeledInputField>

                    <LabeledInputField label="ABI">
                        <TextBoxComponent field={this.state.contractForm.abi}/>
                    </LabeledInputField>

                    <AsyncButton
                        state={this.state}
                        >
                            GET FUNCTIONS
                    </AsyncButton>

                    {
                        (this.state.functions)?
                        <div className="">
                            <h2 className="font-bold">Functions:</h2>
                            {
                                this.state.functions!.map(
                                    (value: FunctionFragment) => <div className="">{value.format()}</div>
                                )
                            }
                        </div>:
                        <></>
                    }
                </form>

                {
                    (this.state.functions)?
                    <form className="w-1/2 px-10" onSubmit={(event) => {event.preventDefault(); this.viewModel.execute()}}>
                        
                        Error: { this.state.error?.message.toString() ?? ""}

                        <h2 className="text-2xl">Execute</h2>

                        <LabeledInputField label="Private Key">
                            <TextFieldComponent field={this.state.executeForm.privateKey}/>
                        </LabeledInputField>

                        <LabeledInputField label="Function">
                            <FunctionFragmentSelectionFieldComponent functions={this.state.functions} field={this.state.executeForm.function}/>
                        </LabeledInputField>


                        <LabeledInputField label="Args">
                            <TextFieldComponent field={this.state.executeForm.args}/>
                        </LabeledInputField>

                        <AsyncButton state={this.state}>
                            EXECUTE
                        </AsyncButton>

                        <div className="mt-5">
                                Output: {AsyncStatus[this.state.status]}
                        </div>
                    </form>:
                    <></>
                }

                

                

                

            </div>
        )
    }


}
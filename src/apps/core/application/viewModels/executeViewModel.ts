import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import ExecuteState from "../states/executeState";
import SCRepository from "../../infrastrucure/repositories/SCRepository";
import { Wallet } from "ethers";
import CoreProviders from "@/di/coreProviders";



export default class ExecuteViewModel extends AsyncViewModel<ExecuteState>{


    private repository = new SCRepository();

    async getFunctions(){
        await this.asyncCall(
            async () => {
                this.state.contractForm.validate(true);
                this.state.functions = await this.repository.getFunctions(
                    this.state.contractForm.address.getValue()!,
                    this.state.contractForm.abi.getValue()!
                )
            }
        )
    }

    async execute(){

        await this.asyncCall(
            async () => {
                this.state.executeForm.validate(true);
                this.state.response = await this.repository.execute(
                    this.state.executeForm.function.getValue()!,
                    JSON.parse(this.state.executeForm.args.getValue()?? ""),
                    new Wallet(this.state.executeForm.privateKey.getValue()!, CoreProviders.providerEtherProvider()),
                    this.state.contractForm.address.getValue()!,
                    this.state.contractForm.abi.getValue()!
                )
            }
        )

    }

}
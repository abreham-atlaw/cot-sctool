import { Wallet } from "ethers";
import AsyncViewModel from "../../../../common/viewmodel/asyncViewModel";
import AuthRepository from "../../infrastrucure/repositories/authRepository";
import CreateUserState from "../states/createUserState";


export default class CreateUserViewModel extends AsyncViewModel<CreateUserState>{


    private authRepository = new AuthRepository();

    async createAccount(){
        console.log("Creating account...");
        await this.asyncCall(
            async () => {
                this.state.wallet = this.authRepository.createAccount() as unknown as Wallet;
            }
        )
    }

}
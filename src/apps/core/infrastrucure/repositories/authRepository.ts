import { HDNodeWallet } from "ethers";
import { Wallet } from "ethers";

export default class AuthRepository {

    createAccount(): HDNodeWallet{
        return Wallet.createRandom();
    }
}

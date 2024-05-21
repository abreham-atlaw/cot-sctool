import { Wallet } from "ethers";
import { AsyncState } from "@/common/state/asyncState";


export default class CreateUserState extends AsyncState{

    wallet?: Wallet;

}
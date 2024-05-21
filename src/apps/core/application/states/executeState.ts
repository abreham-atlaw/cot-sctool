import { AsyncState } from "@/common/state/asyncState";
import { FunctionFragment } from "ethers";
import ContractForm from "../forms/contractForm";
import ExecuteForm from "../forms/executeForm";


export default class ExecuteState extends AsyncState{

    contractForm = new ContractForm();
    functions?: FunctionFragment[];

    executeForm = new ExecuteForm();
    response?: unknown;

}
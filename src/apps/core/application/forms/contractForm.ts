import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";


export default class ContractForm extends Form{

    address = new TextField();
    abi = new TextField();


    getFields(): Field<unknown>[] {
        return [
            this.address,
            this.abi
        ] as Field<unknown>[];
    }
}
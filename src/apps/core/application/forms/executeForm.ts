import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";
import { FunctionFragment } from "ethers";



export default class ExecuteForm extends Form{

    privateKey = new TextField();

    function = new Field<FunctionFragment>();
    args = new TextField(false);

    getFields(): Field<unknown>[] {
        return [
            this.privateKey,
            this.function,
            this.args
        ] as Field<unknown>[];
    }

}
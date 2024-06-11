import { FieldComponent, FieldComponentProps } from '@/common/components/form/FieldComponent';
import React from 'react';
import { FunctionFragment } from 'ethers';

interface FunctionFragmentSelectionFieldComponentProps extends FieldComponentProps<FunctionFragment> {
    functions: FunctionFragment[];
    nullable?: boolean;
}

export default class FunctionFragmentSelectionFieldComponent extends FieldComponent<FunctionFragment, FunctionFragmentSelectionFieldComponentProps>{

    private getBySignature = (value: unknown): (FunctionFragment | null) => {
        if(value === ''){
            return null;
        }
        return this.props.functions.filter(
            (func) => func.format() === value
        )[0] ?? null;
    }

    private getLabel = (func: FunctionFragment): string => {
        return func.format();
    }

    protected constructInputNode(value: FunctionFragment | null, callback: (value: FunctionFragment | null) => void): React.ReactNode {
        if(value === null){
            callback(this.props.functions[0]);
        }
        return (
            <select className="bg-light w-full py-3 rounded-xl px-4 border-gray" value={value?.format() ?? ''} onChange={(event) => {callback(this.getBySignature(event.target.value));}}>
                {
                    (this.props.nullable ?? false)?
                    (
                        <option  value="">
                            None
                        </option>
                    ):
                    (<></>)
                }
                {this.props.functions.map((func) => (
                    <option key={func.format()} value={func.format()}>
                        {this.getLabel(func)}
                    </option>
                ))}
            </select>
        )
    }
}

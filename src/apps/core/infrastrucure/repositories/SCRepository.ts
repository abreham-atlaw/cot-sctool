import CoreProviders from "@/di/coreProviders";
import { Wallet, Contract, FunctionFragment } from "ethers";

export default class SCRepository {
    private readonly provider = CoreProviders.providerEtherProvider();

    async getFunctions(address: string, abi: string): Promise<FunctionFragment[]> {
        const contract = new Contract(address, abi, this.provider);
        const functions = contract.interface.fragments.filter(
            (fragment) => fragment.type === 'function'
        );
        return functions as FunctionFragment[];
    }

    async execute(func: FunctionFragment, args: unknown[], wallet: Wallet, address: string, abi: string) {
        const contract = new Contract(address, abi, wallet);
        const transaction = await contract[func.name](
            ...args,
            {
                gasPrice: 0
            }
        );  
        await transaction.wait();
    }
}

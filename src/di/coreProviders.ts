import { Provider } from "ethers";
import { JsonRpcProvider } from "ethers";
import NetworkClient from "../common/network/NetworkClient";
import DataConfigs from "@/configs/dataConfigs";



export default class CoreProviders{

    private static etherProvider?: Provider;
    static networkClient?: NetworkClient;

    static providerEtherProvider(): Provider{
        if(CoreProviders.etherProvider === undefined){
            CoreProviders.etherProvider = new JsonRpcProvider(DataConfigs.RPC_URL);
        }
        return CoreProviders.etherProvider;
    }

}
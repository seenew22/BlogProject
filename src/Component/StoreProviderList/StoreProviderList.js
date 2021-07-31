// 스토어 관리 코드
// 스토어 추가하는 법
// 1) 규격에 맞게 스토어 생성 후, provider를 import 
// 2) import 한 provider를, 'StoreProviderList' 객체가 반환하도록, list에 추가 함

//import {GNBStoreProvider} from "Page/GNB/Store"
import {MainStoreProvider} from "Page/Main/Store";

const StoreProviderList =  [ 
    //GNBStoreProvider, 
    MainStoreProvider
];

export default StoreProviderList;
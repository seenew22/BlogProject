import React from 'react'
import {makeAutoObservable} from 'mobx'

// the implementation of mobx store
export class MainStore {
    constructor(){
        makeAutoObservable(this);
    }
    
}

const MainStoreContext = React.createContext(null);
let storeInstance = new MainStore();

// Context provider for TestPStore
export function MainStoreProvider({children}) {
    return (
        <MainStoreContext.Provider value={storeInstance}>
            {children}
        </MainStoreContext.Provider>
    )
}

// custom hooks for store use
export const useMainStore = () => React.useContext(MainStoreContext)

export default MainStore;

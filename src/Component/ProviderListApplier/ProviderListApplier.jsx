// 페이지 별 mobx 스토어 여러개 적용 코드 import 해서 사용
//각자 만든 store provider를 component composition 하는 코드
//ex.props로 전달받은, store provider list를 반복문 돌면서 적용
//<StoreProvider A>
//  <StoreProvider B>
//    <StoreProvider C>
//      {childeren}
//    </StoreProvider C>
//  </StoreProvider B>
//</StoreProvider A>

import React from 'react'

/**
 * This Component creates a hierarchial provider tree from the given list
 * @param providerList : The list of provider components (the names, not JSX)
 * @param children : the react DOM children
 */
const ProviderListApplier = ({providerList = [], children = null}) => {
    const [ProviderBlock, updateProvider] = React.useState();
  
    React.useEffect(()=> {
      let index = 0;
      let LastProvider = children;
      for(index ; index < providerList.length; index++){
        // console.log(index,LastProvider)
        let CurrentProvider = providerList[index];
  
        LastProvider = (
            <CurrentProvider>
              {LastProvider}
            </CurrentProvider>
        )     
      }
  
      updateProvider(LastProvider)
  
    },[updateProvider, children, providerList])
  
    return (
    <>{ProviderBlock}</>
    )
}

export default ProviderListApplier

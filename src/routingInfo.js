// 라우팅 페이지들을 관리하는 파일

import {
    Main
} from './Page';


export function routingPageList () {
    return (
        [
            {
                comp : Main, isExact : true, path : ['/', '/Main']
            },

            
        
        ]
    );
    
}
import { MainPage } from './Page';

export function routingPageList () {
    return (
        [
            {
                comp:MainPage, isExact:true, path:['/','/main']
            },
        ]
    );   
}
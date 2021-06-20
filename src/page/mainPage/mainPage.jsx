import React, { lazy, Suspense } from 'react';

const TestComponent = lazy(()=>import('./TestComponent'));

const MainPage = () => {

    return (
        <div>
            테스트 메인 페이지~~
            <Suspense fallback={<div>테스트 컴포넌트 로딩중..</div>}>
                <TestComponent />
            </Suspense>
        </div>
    );
}

export default MainPage;
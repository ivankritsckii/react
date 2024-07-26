import { Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Page404 } from './Page_404/page_404'
import { DatailsElement } from './detailsElement'

export function Router() {
    if (window.location.href.split('react/')[1] === '') {
        // eslint-disable-next-line react-compiler/react-compiler
        window.location.href = `${window.location.href}page=1`
    }

    const arrRouting = []
    for (let i = 1; i < 11; i++) {
        arrRouting.push(
            <Route
                key={`route${i}`}
                path={`/react/page=${i}`}
                element={<App page={i} />}
            >
                <Route
                    path={`/react/page=${i}/datails`}
                    element={<DatailsElement />}
                />
            </Route>
        )
    }
    return (
        <Routes>
            <Route path="/react" element={<App />} />
            {arrRouting}
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

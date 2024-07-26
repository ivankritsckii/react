import { createContext, ReactNode, useState } from 'react'

const isdarkMode = false
const toggleDarkMode = () => {}

export const ThemeContent = createContext({ isdarkMode, toggleDarkMode })
export function ThemeProvider(props: { children: ReactNode }) {
    const [isdarkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!isdarkMode)
    }
    return (
        <div>
            <ThemeContent.Provider value={{ isdarkMode, toggleDarkMode }}>
                {props.children}
            </ThemeContent.Provider>
        </div>
    )
}

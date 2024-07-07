import React from 'react'

export class MyErrorBoundary extends React.Component {
    constructor(props: HTMLElement) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error)
        return { hasError: true }
    }

    componentDidCatch(error: Error) {
        this.state = { hasError: true }
        console.log(error)
    }

    render() {
        const state = this.state as { hasError: boolean }
        if (state.hasError) {
            return <h1>Something went wrong.</h1>
        }
        const props = this.props as { children: React.ReactNode }
        return props.children
    }
}

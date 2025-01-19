import ErrorDemo from './ErrorDemo'
import ErrorBoundary from './ErrorBoundary'

function App() {
    return (
        <div>
            <h1>useEffect Error Demo</h1>

            <div>
                <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>Without Error Boundary</h3>
                    <ErrorDemo title="Unprotected Component" />
                </div>

                <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>With Error Boundary</h3>
                    <ErrorBoundary>
                        <ErrorDemo title="Protected Component" />
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    )
}

export default App

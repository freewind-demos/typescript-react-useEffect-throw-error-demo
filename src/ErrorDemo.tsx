import { useState, useEffect } from 'react'

interface Props {
    title: string;
}

function ErrorDemo({ title }: Props) {
    const [shouldThrow, setShouldThrow] = useState(false)

    useEffect(() => {
        if (shouldThrow) {
            throw new Error(`Error thrown from useEffect in ${title}!`)
        }
    }, [shouldThrow, title])

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={() => setShouldThrow(true)}>
                Trigger Error
            </button>
        </div>
    )
}

export default ErrorDemo 
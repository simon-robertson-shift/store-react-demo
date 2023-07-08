'use client'

import CounterStore from 'app/stores/CounterStore'
import style from './page.style'

import { useStoreState } from '@nomemo/store-react'
import { useStyleClasses } from '@nomemo/style-react'

export default function Home() {
    const count = useStoreState(CounterStore, (state) => state.count)
    const styleClasses = useStyleClasses(style)

    const handleClick = (): void => {
        CounterStore.getActions().increase()
    }

    return (
        <div className={styleClasses.root} onClick={handleClick}>
            <div className={styleClasses.text}>Click anywhere to increase this value: {count}</div>
        </div>
    )
}

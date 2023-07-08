'use client'

import CounterStore from 'app/stores/CounterStore'
import css from './page.module.css'

import { useStoreState } from '@nomemo/store-react'

export default function Home() {
    const count = useStoreState(CounterStore, (state) => state.count)

    const handleClick = (): void => {
        CounterStore.getActions().increase()
    }

    return (
        <div className={css.root} onClick={handleClick}>
            <div className={css.text}>Click anywhere to increase this value: {count}</div>
        </div>
    )
}

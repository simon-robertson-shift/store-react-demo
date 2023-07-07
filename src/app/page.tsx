'use client'

import { useReactiveState } from '@simon-robertson-online/reactive-react'

import CounterStore from 'app/stores/CounterStore'
import css from './page.module.css'

export default function Home() {
    const count = useReactiveState(CounterStore, (state) => state.count)

    const handleClick = (): void => {
        CounterStore.getActions().increase()
    }

    return (
        <div className={css.root} onClick={handleClick}>
            <div className={css.text}>Click anywhere to increase this value: {count}</div>
        </div>
    )
}

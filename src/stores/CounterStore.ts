import type { ReactiveActionsFactory, ReactiveStateFactory } from '@nomemo/reactive/types'
import { createReactiveStore } from '@nomemo/reactive'

// Declare actions
type Actions = {
    readonly increase: () => void
}

// Delcare state
type State = {
    readonly count: number
}

// Define actions
const createActions: ReactiveActionsFactory<Actions, State> = ({ getState, updateState }) => {
    return {
        increase: () => {
            const { count } = getState()

            updateState({ count: count + 1 })
        }
    }
}

// Define state
const createState: ReactiveStateFactory<State> = () => {
    return {
        count: 0
    }
}

// Create the reactive store
export default createReactiveStore(createActions, createState)

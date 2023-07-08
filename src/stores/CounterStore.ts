import type { StoreActionsFactory, StoreStateFactory } from '@nomemo/store/types'
import { createStore } from '@nomemo/store'

// Declare actions
type Actions = {
    readonly increase: () => void
}

// Delcare state
type State = {
    readonly count: number
}

// Define actions
const createActions: StoreActionsFactory<Actions, State> = ({ getState, updateState }) => {
    return {
        increase: () => {
            const { count } = getState()

            updateState({ count: count + 1 })
        }
    }
}

// Define state
const createState: StoreStateFactory<State> = () => {
    return {
        count: 0
    }
}

// Create the reactive store
export default createStore(createActions, createState)

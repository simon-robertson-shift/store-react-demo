import { createStyle } from '@nomemo/style'

const style = createStyle(() => {
    return {
        root: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 40,
            position: 'fixed',
            backgroundColor: '#202020'
        },
        text: {
            color: '#e0e0e0',
            fontSize: 24,
            userSelect: 'none'
        }
    }
})

export default style

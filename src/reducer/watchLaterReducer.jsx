const watchLaterReducer = ({watchLaterState, watchLaterAction}) => {
    switch (watchLaterAction.type) {
        case "" : 
        return {

        }
        case "WATCH_LATER":
            return{
                ...watchLaterState,
                watchLaterItems : [watchLaterState.watchLaterItems, watchLaterAction.payload]
            }
        default: 
        return watchLaterState
    }
}

export {watchLaterReducer}
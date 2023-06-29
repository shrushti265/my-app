const storeReducer = (storeState, storeAction) => {
    switch (storeAction.type) {
        case "FETCH_DATA":
            return{
                ...storeState,
                storeItems: [...storeAction.payload, ...storeState.storeItems]
            }

        case "SMALL_MODAL":
            return{
                ...storeState,
                storeItems: storeState.storeItems.map((item) => item.id === storeAction.payload? {
                    ...item, modal: !item.modal} :item )
                }
                

            default:
                return storeState
    }
}
export {storeReducer}
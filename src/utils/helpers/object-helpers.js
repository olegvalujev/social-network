export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
    return items.map(i => {
        if (i[objPropName] === itemId) {
            return {...i, ...newObjectProps}
        }
        return i
    })
}
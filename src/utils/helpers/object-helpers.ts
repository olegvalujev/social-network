export const updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjectProps: any) => {
    return items.map((i: any) => {
        if (i[objPropName] === itemId) {
            return {...i, ...newObjectProps}
        }
        return i
    })
}
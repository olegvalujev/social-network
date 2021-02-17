export  type FieldValidatorsType = (value: string) => string | undefined

export const required: FieldValidatorsType = (value) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLength = (maxLength: number): FieldValidatorsType => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength}`
    return undefined
}
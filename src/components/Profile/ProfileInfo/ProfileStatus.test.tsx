import React from 'react';
import {create, ReactTestInstance} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'testing'}/>)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance.state.status).toBe('testing')
    })

    test('After creation span element should be displayed', () => {
        const component = create(<ProfileStatus status={'testing'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })

    test('After creation input element should not be displayed', () => {
        const component = create(<ProfileStatus status={'testing'}/>)
        const root = component.root
        expect(()=>{
            let input = root.findByType('input')
        }).toThrow()
    })

    test('After creation span element should be with a correct status', () => {
        const component = create(<ProfileStatus status={'testing'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('testing')
    })

    test('If edit mode is on input should be visible', () => {
        const component = create(<ProfileStatus status={'testing'}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('testing')
        expect(()=>{
            root.findByType('span')
        }).toThrow()
    })

    test('Callback function should be called', () => {
        let mockCallback = jest.fn()

        const component = create(<ProfileStatus status={'testing'} updateStatus={mockCallback}/>)
        const instance= component.getInstance()
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})
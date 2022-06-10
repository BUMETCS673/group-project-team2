import React from 'react';
import { render, screen, waitFor, fireEvent} from '@testing-library/react'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import JobForm from './JobForm';
import {Provider} from 'react-redux' 
import {store} from '../../app/store'
import { appTheme } from '../../styles/app-theme'
import { ThemeProvider } from 'styled-components'



describe("JobForm component", () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <Provider store = {store}>
                <ThemeProvider theme = {appTheme}>
                    <JobForm/>
                </ThemeProvider>
                
            </Provider>
            
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    });
    it("shows validation on blur", async () => {
        const {getByTestId} = render(
                <Provider store = {store}>
                    <ThemeProvider theme = {appTheme}>
                        <JobForm  />
                    </ThemeProvider>
                    
                </Provider>)
        const input = getByTestId('companyname')
        fireEvent.blur(input)
        await waitFor( () => {
            expect(getByTestId("companynameError")).not.toBe(null)
            expect(getByTestId("companynameError")).toHaveTextContent("Required")
        })
    }) 
    
    
    
})
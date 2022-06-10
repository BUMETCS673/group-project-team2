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
        render(
            <Provider store = {store}>
                <ThemeProvider theme = {appTheme}>
                    <JobForm/>
                </ThemeProvider>
                
            </Provider>
            
        )
        
    });
    it("shows company validation on blur", async () => {
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
    it("shows jobtitle validation on blur", async () => {
        const {getByTestId} = render(
                <Provider store = {store}>
                    <ThemeProvider theme = {appTheme}>
                        <JobForm  />
                    </ThemeProvider>
                    
                </Provider>)
        const input = getByTestId('jobtitle')
        fireEvent.blur(input)
        await waitFor( () => {
            expect(getByTestId("jobtitleError")).not.toBe(null)
            expect(getByTestId("jobtitleError")).toHaveTextContent("Required")
        })
    }) 
    
    
    
})
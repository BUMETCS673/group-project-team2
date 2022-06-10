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
    
    it('renders and submits a formik form', async() => {
        const handleSubmit = jest.fn()
        render(
        <Provider store = {store}>
            <ThemeProvider theme = {appTheme}>
                <JobForm onSubmit={handleSubmit} />
            </ThemeProvider>
            
        </Provider>)
        

        await fireEvent.input(screen.getByTestId('companyname', 'Amazon'))
        await fireEvent.input(screen.getByTestId('jobtitle', 'Software Engineer'))
        await fireEvent.input(screen.getByTestId( 'status', 'in progress'))

        await fireEvent.click(screen.getByRole('button', {name: /save/i}))

        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
            companyname: 'Amazon',
            jobtitle: 'Software Engineer',
            status: 'in progress',
            }),
        )
      })
    
})
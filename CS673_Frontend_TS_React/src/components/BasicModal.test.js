import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import BasicModal from './BasicModal';
import { appTheme } from '../styles/app-theme'
import { ThemeProvider } from 'styled-components'
import {Provider} from 'react-redux' 
import {store} from '../app/store'


describe("BasicModal component", () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <Provider store = {store}>
                <ThemeProvider theme = {appTheme}>
                    <BasicModal/>
                </ThemeProvider>
            </Provider>
            
            
        )
        
    });
    
    it('has an add button that opens a modal',  () => {
        render(<Provider store = {store}>
                <ThemeProvider theme = {appTheme}> <BasicModal/> </ThemeProvider>
            </Provider>)
        const button = screen.getByTestId("modal-btn")
        fireEvent.click(button)
        const closeBtn = screen.getByTestId("close-modal-btn")
        expect(closeBtn).toBeInTheDocument()

        fireEvent.click(closeBtn)
        expect(closeBtn).not.toBeInTheDocument()
    })
    
    
})
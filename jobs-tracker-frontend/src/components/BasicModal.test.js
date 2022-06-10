import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import BasicModal from './BasicModal';


describe("BasicModal component", () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <ThemeProvider>
                <BasicModal/>
            </ThemeProvider>
            
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    });
    
    it('has an add button that opens a modal',  () => {
        render(<ThemeProvider> <BasicModal/> </ThemeProvider>)
        const button = screen.getByRole('button', {name: /add/i})
        fireEvent.click(button)
        const closeBtn = screen.getByRole('button', {name: /close-modal/i})
        expect(closeBtn).toBeInTheDocument()

        fireEvent.click(closeBtn)
        expect(closeBtn).not.toBeInTheDocument()
    })
    
    
})
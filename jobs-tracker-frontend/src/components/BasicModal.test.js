import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import BasicModal from './BasicModal';


describe("BasicModal component", () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <BasicModal/>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    });
    
    it('has an add button that opens a modal',  () => {
        render(<BasicModal/>)
        const button = screen.getByRole('button', {name: /New/i})
        fireEvent.click(button)
        const saveBtn = screen.getByRole('button', {name: /Save/i})
        expect(saveBtn).toBeInTheDocument()

        const closeBtn = screen.getByRole('button', {name: /close/i})
        fireEvent.click(closeBtn)
        expect(saveBtn).not.toBeInTheDocument()
    })
    it('renders and submits a formik form', async => {
        const handleSubmit = jest.fn()
        render(<BasicModal onSubmit={handleSubmit} />)
        const user = fireEvent.setup()
      
        await user.type(screen.getByLabelText(/companyName/i), 'Amazon')
        await user.type(screen.getByLabelText(/jobTitle/i), 'Software Engineer')
      
        await user.click(screen.getByRole('button', {name: /save/i}))
      
        await waitFor(() =>
          expect(handleSubmit).toHaveBeenCalledWith({
            companyName: 'Amazon',
            jobTitle: 'Software Engineer',
          }),
        )
      })
    
})
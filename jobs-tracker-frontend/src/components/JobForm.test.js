import React from 'react';
import { render, screen, fireEvent, waitFor, } from '@testing-library/react'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import JobForm from './JobForm';


describe("JobForm component", () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <JobForm/>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    });
    
    it('renders and submits a formik form', async => {
        
      })
    
})
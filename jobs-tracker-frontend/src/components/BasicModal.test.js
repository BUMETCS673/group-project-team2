import React from 'react';
import renderer from 'react-test-renderer';
import BasicModal from './BasicModal';

describe("BasicModal component", () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <BasicModal/>
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
    
})
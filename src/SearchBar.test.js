import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

const setUp = (props = {}) => {
  const component = shallow(<SearchBar {...props} />);
  return component;
};

describe('SearchBar Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  describe('Should render without errors', () => {
    it('Should render Form element', () => {
      const element = component.find('Form');
      expect(element.length).toBe(1);
    });

    it('Should render InputGroup element', () => {
      const element = component.find('InputGroup');
      expect(element.length).toBe(1);
    });

    it('Should render FromControl element', () => {
      const element = component.find('FormControl');
      expect(element.length).toBe(1);
    });

    it('Should render Button element', () => {
      const element = component.find('Button');
      expect(element.length).toBe(1);
    });
  });

  describe('Should render different UI state', () => {
    it('Should render button disabled', () => {
      const buttonComponent = setUp({ buttonDisabled: true });
      const element = buttonComponent.find('Button');
      const isDisabled = element.props().disabled;
      expect(isDisabled).toBe(true);
    });
  });
});
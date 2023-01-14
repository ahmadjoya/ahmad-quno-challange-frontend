import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';

describe('Nav', () => {
  it('should render correctly', () => {
    const { container } = render(<Nav />);

    expect(container.children[0].nodeName).toBe('NAV');
  });
});

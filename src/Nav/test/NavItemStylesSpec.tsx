import React from 'react';
import { render } from '@testing-library/react';
import Nav from '../index';
import { getDOMNode, getStyle, toRGB, getDefaultPalette, inChrome } from '@test/testUtils';

import '../styles/index.less';

const { H700 } = getDefaultPalette();

describe('NavItem styles', () => {
  it('Default NavItem should render the correct styles', () => {
    const instanceRef = React.createRef<HTMLAnchorElement>();
    render(
      <Nav>
        <Nav.Item ref={instanceRef}>Text</Nav.Item>
      </Nav>
    );
    const navItemContentDom = getDOMNode(instanceRef.current);
    inChrome && assert.equal(getStyle(navItemContentDom, 'padding'), '8px 12px', 'NavItem padding');
    assert.equal(getStyle(navItemContentDom, 'color'), toRGB('#575757'), 'NavItem color');
  });

  it('Default NavItem should render the correct styles when active', () => {
    const instanceRef = React.createRef<HTMLAnchorElement>();
    render(
      <Nav>
        <Nav.Item ref={instanceRef} active>
          Active
        </Nav.Item>
      </Nav>
    );
    const navItemContentDom = getDOMNode(instanceRef.current);
    assert.equal(getStyle(navItemContentDom, 'color'), H700, 'NavItem color');
  });

  it('Default NavItem should render the correct styles when disabled', () => {
    const instanceRef = React.createRef<HTMLAnchorElement>();
    render(
      <Nav>
        <Nav.Item ref={instanceRef} disabled>
          Disabled
        </Nav.Item>
      </Nav>
    );
    const navItemContentDom = getDOMNode(instanceRef.current);
    assert.equal(getStyle(navItemContentDom, 'color'), toRGB('#c5c6c7'), 'NavItem color');
    assert.equal(getStyle(navItemContentDom, 'cursor'), 'not-allowed', 'NavItem cursor');
  });
});

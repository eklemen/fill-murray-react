import React from 'react';
import FillMurray from '../src/index';

describe('FillMurray', () => {
    const wrapper = shallow(<FillMurray />);

    it('should be an image', () => {
        expect(wrapper.type()).to.eql('img');
    });
    it('should default to 300x300 full color', () => {
        var url = "http://www.fillmurray.com/300/300";
        expect(wrapper.find(`[src="${url}"]`)).to.have.length(1);
    });
    it('should render based on dimension arguments', () => {
        wrapper.setProps({ w: '200', h:'450' });
        var url = "http://www.fillmurray.com/200/450";
        expect(wrapper.find(`[src="${url}"]`)).to.have.length(1);
    });
    it('should accept the greyscale flag', () => {
        wrapper.setProps({grayscale:true,h:300,w:300});
        var url = "http://www.fillmurray.com/g/300/300";
        expect(wrapper.find(`[src="${url}"]`)).to.have.length(1);
    });
});
import { expect } from 'chai';
import { sinon, spy } from 'sinon';
//import { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

global.expect = expect;
global.sinon = sinon;
global.spy = spy;

global.mount = Enzyme.mount;
global.render = Enzyme.render;
global.shallow = Enzyme.shallow;
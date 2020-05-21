import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, {ExampleWorkBubble} from "../js/example-work";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myWork = [
    {
        'title': "Serverless Attendance App",
        'image': {
            'desc': "example screenshot of attendance UI",
            'src': "images/attendance.png",
            'comment': ""
        }
    },

    {
        'title': "Portfolio Boilerplate",
        'image': {
            'desc': "A Serverless Portfolio",
            'src': "images/portfolio.png",
            'comment': ""
        }
    },
];
describe("ExampleWork component", () => {
    let component = shallow(<ExampleWork work={myWork}/>);

    it("Should be a 'span' element", () => {
        expect(component.type()).toEqual('span');
    });

    it("Should contain as many children as there are work examples", () =>{
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    });

    it("Should allow modal to open and close", () => {
        component.instance().openModal();
        expect(component.instance().state.modalOpen).toBe(true);

        component.instance().closeModal();
        expect(component.instance().state.modalOpen).toBe(false);
    });
});


describe("ExampleWorkBubble component", () => {

    let mockOpenModalFn = jest.fn();

    let component = shallow(<ExampleWorkBubble example={myWork[1]}
        openModal={mockOpenModalFn}/>);

    let images = component.find("img");

    it("Should contain a single image element", () => {
        expect(images.length).toEqual(1);
    });

    it("Should have the image source set correctly", () => {
        expect(images.prop('src')).toEqual(myWork[1].image.src);
    });

    it("Should call the open modal handler when clicked", () => {
        component.find(".section__exampleWrapper").simulate('click');
        expect(mockOpenModalFn).toHaveBeenCalled();
    })
})
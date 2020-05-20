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
    it("Should be a 'section' element", () => {
        expect(component.type()).toEqual('section');
    });

    it("Should contain as many children as there are work examples", () =>{
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    });
});


describe("ExampleWorkBubble component", () => {
    let component = shallow(<ExampleWorkBubble example={myWork[1]}/>)

    let images = component.find("img");

    it("Should contain a single image element", () => {
        expect(images.length).toEqual(1);
    });

    it("Should have the image source set correctly", () => {
        expect(images.prop('src')).toEqual(myWork[1].image.src);
    })
})
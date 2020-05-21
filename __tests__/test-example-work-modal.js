import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from "../js/example-work-modal";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myExample = {
    'title': "Serverless Attendance App",
    'href': "https://example.com",
    'desc': "Scalable, Serverless location based attendance tracker",
    'image': {
    'desc': "example screenshot of attendance UI",
        'src': "images/attendance.png",
        'comment': ""
    }
};

describe("ExampleWorkModal component", () => {

    let component = shallow(<ExampleWorkModal example={myExample}
        open={false}/>);
    let openComponent = shallow(<ExampleWorkModal example={myExample}
        open={true}/>);

    let anchors = component.find("a");
    it("Should contain a single a element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.prop('href')).toEqual(myExample.href);
    });

    it("Should have modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    })
});
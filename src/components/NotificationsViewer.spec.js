import delay from 'redux-saga';
import React from 'react';
import renderer from 'react-test-renderer';
import NotificationsViewer from './NotificationsViewer';
import { exportAllDeclaration } from '@babel/types';


jest.mock('../services/NotificationsService')
const NotificationsService = require('../services/NotificationsService')


describe("The notifications viewer", () => {
    beforeAll(()=> {
        NotificationsService.default._setCount(42)
        // console.log('NotificationsService ', NotificationsService)
    })


    it("should display the correct number of notifications", async() => {
        const tree = renderer.create(
            <NotificationsViewer></NotificationsViewer>
        )

        await delay();

        const instance = tree.root;
        const component = instance.findByProps({className: "notifications"});        
        const text = component.children[0];
        expect(text).toEqual("42 Notifications awaiting")
    })
})
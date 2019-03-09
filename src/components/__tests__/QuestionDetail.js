import QuestionDetail, { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from 'react-test-renderer';
import React from 'react';


import { exportAllDeclaration } from "@babel/types";
describe(`The Question Detail Component`, ()=> {
    describe(`The Container Element`, ()=> {
        describe(`mapStateToProps`, ()=> {
            it("should map the state to props correctly", () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big",
                }
                const appState = {
                    questions: [sampleQuestion]
                };
                const ownProps = {
                    question_id: 42
                };  
                const componentState = mapStateToProps(appState, ownProps);
                expect(componentState).toEqual(sampleQuestion)
            })
        })
    })

    describe(`The display element`, () => {
        const tree = renderer.create(
            <QuestionDetailDisplay
                title="The meaning of life"
                body="42"
                answer_count={0}
                tags={["hiking"]}
            ></QuestionDetailDisplay>
        )

        expect(tree.toJSON()).toMatchSnapshot()
    })
    it(`Should not regress`, () => {
        
    })
})
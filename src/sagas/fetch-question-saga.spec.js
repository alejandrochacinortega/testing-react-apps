import { handleFetchQuestion } from "./fetch-question-saga";

describe("Fetch questions saga", () => {
    it.only("should fetch the questions", async () => {
        const gen = handleFetchQuestion({question_id:42})
        const { value } = await gen.next()
        
    })
})
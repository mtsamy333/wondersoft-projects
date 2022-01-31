import { addation, sub, mul, div } from "./myfunction";


describe("testing the calculator",()=>{
    it("testing only addation",()=>{
        expect(addation(100,200)).toBe(300)
    })
    it("testing only sub",()=>{
        expect(sub(100,200)).toBe(-100)
    })
    it("testing only mul",()=>{
        expect(mul(100,200)).toBe(20000)
    })
    it("testing only div",()=>{
        expect(div(100,200)).toBe(0.5)
    })
})
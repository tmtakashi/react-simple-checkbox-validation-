import React, { useState } from "react"

const Form = props => {
  const [foo, setFoo] = useState(false);
  const [bar, setBar] = useState(false);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'foo':
        const newFoo = event.target.checked
        setFoo(newFoo);
        props.validate(newFoo && bar) // この時点でstateが更新されている保証がないので、別の変数に格納したものを使う
        break;
      case 'bar':
        const newBar = event.target.checked
        setBar(newBar);
        props.validate(foo && newBar)
        break;
      default:
        console.log('key not found');
    }
  }
  
  return (
    <div>
      <label htmlFor="foo">Foo</label>
      <input name="foo" type="checkbox" 
        onChange={(e) => {
          handleChange(e);
        }} />
      <label htmlFor="bar">Bar</label>
      <input name="bar" type="checkbox" 
        onChange={(e) => {
          handleChange(e);
        }} />
    </div>
  )
}


export default Form

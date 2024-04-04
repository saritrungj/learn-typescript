import React from 'react'
import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

const App = () => {
  return (
    <>
      <Heading
        title={`Hello this is a Heading`}
      />
      <Section
        children={`This is a section 1`}
      />
      <Counter />
      <List items={["☕ Coffee", "🌮 Taco", "💻 Code"]} render={(item: string) => <span>{item}</span>} />
    </>

  )
}

export default App
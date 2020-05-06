import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.div`
  ${tw`flex-row
       max-w-md mx-auto 
       border rounded 
       shadow-xl mt-6 p-4`}
  h1 {
    ${tw`font-bold text-center`}
  }
`
const TestTW = () => {
  return (
    <>
      <Container>
        <h1>Hello World!</h1>
        <p>
          Reprehenderit magna cillum sit nulla duis reprehenderit esse dolore
          voluptate reprehenderit sit. Aliqua cillum proident non deserunt
          pariatur enim officia elit labore voluptate consectetur. Anim dolor
          minim consectetur deserunt eiusmod est velit do ut magna cupidatat do
          est. Velit officia esse ut qui. Minim ullamco officia commodo qui do
          culpa nisi ut ex aliqua ut. Exercitation ipsum mollit do et elit
          dolore culpa.
        </p>
      </Container>
    </>
  )
}

export { TestTW }

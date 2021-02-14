import {FormEvent} from 'react'
import uuid from 'uuid-random'

interface IUser {
  id: string
  firstName: string
  lastName: string
  age: number
}

interface IProps {
  onAdd(user: IUser): void
}

export function Add({onAdd}: IProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('first-name')
    const lastName = formData.get('last-name')
    const age = formData.get('age')
    if (firstName && lastName && age) {
      const id = uuid()
      onAdd({
        id,
        firstName: firstName.toString(),
        lastName: lastName.toString(),
        age: parseInt(age.toString())
      })
    }
  }
  return (
    <div>
      <h2>Add</h2>
      <form onSubmit={handleSubmit}>
        <input name='first-name' type='text' placeholder='First Name' />
        <input name='last-name' type='text' placeholder='Last Name' />
        <input name='age' type='number' placeholder='Age' />
        <button>Submit</button>
      </form>
    </div>
  )
}

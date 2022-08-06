import React, { useEffect, useState } from 'react'
import { Button, Input, message } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { IPhone } from '../../utils'

const Task2: React.FC = () => {

     const [phones, setPhones] = useState<IPhone[]>([])

     useEffect(() => addPhone(), [])

     const addPhone = () => {
          setPhones([...phones, { value: "", error: false }])
     }

     const removePhone = (index: number) => {
          phones.splice(index, 1)
          setPhones([...phones])
     }

     const handleChange = (value: string, i: number) => {
          phones[i].value = value
          if (phones[i].error) phones[i].error = false
          setPhones([...phones])
     }

     const handleSubmut = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          if (phones.some(el => !el.value)) {
               const current = phones.map(el => {
                    if (!el.value) el.error = true
                    return el
               })
               setPhones(current)
          } else {
               setPhones([{ value: "", error: false }])
               message.success("Successfully done")
          }
     }

     return (
          <div className='task2'>
               <form className="task2-form" onSubmit={handleSubmut}>
                    {
                         phones.map((el: IPhone, i: number) => (
                              <div className="task2-form-item" key={i}>
                                   <Input
                                        addonBefore="+998"
                                        type="number"
                                        value={el.value}
                                        status={el.error ? "error" : ""}
                                        onChange={(value) => handleChange(value.target.value, i)}
                                   />
                                   <Button type="primary" danger disabled={phones.length === 1} onClick={() => removePhone(i)}>
                                        <DeleteOutlined />
                                   </Button>
                              </div>
                         ))
                    }
                    <div className='task2-form-btns'>
                         <Button onClick={addPhone}>
                              Add Phone
                         </Button>
                         <Button type="primary" htmlType='submit'>
                              Submit
                         </Button>
                    </div>
               </form>
          </div>
     )
}

export default Task2
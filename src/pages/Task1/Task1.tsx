import React, { useEffect, useMemo } from 'react'
import api from '../../api'
import { IComment, setComments, setLoading, setPage } from '../../utils'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { message, Spin } from 'antd'
import { useInView } from 'react-intersection-observer'

const Task1: React.FC = () => {

     const { ref, inView } = useInView();

     const { isLoading, comments, page } = useSelector((state: RootState) => state.task1)

     const viewItems = useMemo(() => {
          return comments.filter((el, i) => i < page * 20)
     }, [comments, page])

     useEffect(() => {
          fetchComments()
     }, [])

     useEffect(() => {
          if (inView) {
               setLoading(true)
               setTimeout(() => {
                    setPage(page + 1)
                    setLoading(false)
               }, 500)
          }
     }, [inView])

     const fetchComments = async () => {
          try {
               const res = await api.get('/comments')
               const comments = res.data
               setComments(comments)
          }
          catch {
               message.error("Something went wrong")
          }
     }

     const lastChildRef = (i: number) => {
          return i + 1 === page * 20
     }

     return (
          <div className='task1'>
               <div className="task1-cards">
                    {
                         viewItems?.map((el: IComment, i) => (
                              <div key={el.id} className="task1-cards-item" ref={lastChildRef(i) ? ref : null}>
                                   <p>Post No: <b>{i + 1}</b></p>
                                   <p>Name: <b>{el.name}</b></p>
                                   <p>Email: <b>{el.email}</b></p>
                                   <p>Body: <b>{el.body}</b></p>
                              </div>
                         ))
                    }
               </div>
               {isLoading && <div className="task1-spin">
                    <Spin />
               </div>}
          </div>
     )
}

export default Task1
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { verify } from "../services/users"
import "./user.css"
import React from 'react'
import { getPost, deletePost } from '../services/posts'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


export default function User() {

  let { id } = useParams()

  const [user, setUser] = useState({})

  const [post, setPost] = useState([])
 // eslint-disable-next-line no-unused-vars
  const [toggle, setToggle] = useState(false) 

  useEffect(() => {
    const fetchPost = async () => {
      let response = await getPost(user.id)
      
      setPost(response)
      // console.log(response)
    }
    if (user.id) {
      console.log(id)
      fetchPost()
    }
}, [user, id])
  console.log(user, id)
  useEffect(() => {
    handleData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  async function handleData() {
    let res = await verify(id)
    setUser(res)
    // console.log(res)
  } 
  

  async function handleDelete(event) {
    await deletePost(event.target.value)
    setToggle(prevState => !prevState)
  }


  function handlePosts() {
    if (post) {
      return (
          post.map((posts, index) => {
            return (
              <div className='post-container' key={index} >

                <div className="post-header">
                  <h2 className="username">{posts.username}</h2>
                </div>

                <div className="post-image">
                  <img src={posts.imgURL} alt="user post" />
                </div>

                <div className="card-content">
                  <p className="caption"><span className="caption-name">{posts.username}</span>{posts.caption}</p>
                </div>
                <br />
                <hr />
                <div className="post-actions">
                  <IconButton>
                    <Link to={`/edit-post/${posts._id}`} className="edit">
                      <EditIcon />
                    </Link>
                  </IconButton>
                  <button className="delete" value={posts._id}
                onClick={handleDelete}>Delete</button>
                </div>
              </div>
            )
          })
      )
    } else {
      return <div className="empty-container">
        <h5 className='empty-post'>No Posts</h5>
      </div>
    }
  }
  
  return (
  <div>
      <div>
        <h1 className="username-text">{user?.username}</h1>
    </div>
      <h5>{`My Posts:`}</h5>
      {handlePosts()}
      </div>
)
}


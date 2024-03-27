import { useState, useEffect } from 'react'
import Logo from './Logo'

const Hero = () => {
  const [url, setUrl] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [datas, setDatas] = useState([])
  const [show, setShow] = useState(false)

  const handleShow = () => {
    let type = document.querySelector('#password').type

    if(type == "password")
      document.querySelector('#password').type = "text"
    else 
      document.querySelector('#password').type = "password"

    setShow(!show)
  }

  const handleSave = async () => {
    let url = document.querySelector('#url').value
    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value

    setDatas([...datas, { url, username, password }])
    setUrl("")
    setUsername("")
    setPassword("")

    await fetch("http://localhost:3000/", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, username, password }),
    });
  }

  const handleDelete = async (e) => {
    let index = e.target.dataset.index
    let data = datas[index]

    await fetch("http://localhost:3000/", {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setDatas([...datas.filter((item) => {
      return item != datas[index]
    })])
  }

  const handleEdit = async (e) => {
    let index = e.target.dataset.index
    let data = datas[index]

    setUrl(data.url)
    setUsername(data.username)
    setPassword(data.password)

    await fetch("http://localhost:3000/", {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setDatas([...datas.filter((item) => {
      return item != datas[index]
    })])
  }
  
  const handleChange = (e) => {
    let id = e.target.id

    switch(id) {
      case 'url':
        setUrl(e.target.value)
        break

      case 'username':
        setUsername(e.target.value)
        break

      case 'password':
        setPassword(e.target.value)
        break
    }
  }

  const handleCopy = async (e) => {
    let data = e.target.dataset.value

    navigator.clipboard.writeText(data)
  }

  const getDatas = async () => {
    let req = await fetch("http://localhost:3000/")
    let datas = await req.json()
    setDatas(datas)
  }

  useEffect(() => {
    getDatas()
  }, [])
  
  return (
    <main className='md:w-5/6 md:mx-auto'>
      <div className='text-center py-2'>
        <Logo size={'text-[35px]'} color="black" leading />
        <p className='font-medium text-lg'>Your own Password Manager</p>
      </div>
      <div className='inputs w-5/6 mx-auto'>
        <input 
          id='url'
          type="url" 
          value={url}
          placeholder='Enter website URL' 
          className='outline outline-2 outline-green-600 rounded-full w-full my-2 mx-auto px-4 py-1.5'
          onChange={handleChange}
        />
        <input 
          id='username'
          type="text" 
          value={username}
          placeholder='Enter Username' 
          className='outline outline-2 outline-green-600 rounded-full w-full my-2 mx-auto lg:w-[57.5%] px-4 py-1.5'
          onChange={handleChange}
        />
        <span className='relative'>
          <input 
            id='password'
            type="password" 
            value={password}
            placeholder='Enter Password' 
            className='outline outline-2 outline-green-600 rounded-full w-full my-2 mx-auto lg:w-[37.5%] lg:ml-[5%] pl-4 pr-6 py-1.5'
            onChange={handleChange}
          />
          <img 
            src={show ? '/hide.svg' : '/show.svg'} 
            alt={show ? 'hide' : 'show'}
            className='w-5 h-5 absolute top-[10%] right-[3%] cursor-pointer'
            onClick={handleShow}
          />
        </span>
      </div>
      <button 
        className='flex items-center gap-2 bg-green-400 rounded-full font-medium px-3 py-1.5 outline outline-1 mx-auto mt-7'
        onClick={handleSave}
      >
        <img 
          src="/save.svg" 
          alt="save" 
          className='h-7 w-7'
        />
        <span>Save</span>
      </button>
      <div className={`password-container pt-7 sm:mx-[8%] mx-2 min-h-[209px] lg:min-h-[260px] ${datas.length >= 1 && 'lg:mb-3'}`}>
        <h2 className='font-bold text-2xl mb-2'>Your Passwords</h2>
        {datas.length < 1
          ? <div className='font-medium'>No passwords to show</div> 
          : <table className='w-full'>
              <thead className='bg-green-700 text-white'>
                <tr className='max-sm:text-sm'>
                  <th className='w-[40%] max-sm:w-[35%] py-1 font-medium'>Site</th>
                  <th className='w-[25%] max-sm:w-[25%] py-1 font-medium'>Username</th>
                  <th className='w-[20%] max-sm:w-[25%] py-1 font-medium'>Password</th>
                  <th className='w-[15%] max-sm:w-[15%] py-1 font-medium'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-sm max-sm:text-xs'>
                {datas.map((data, i) => (
                <tr key={i} className='bg-[#d2ffa6] relative'>
                  <td className='text-center p-[5px] '>
                    <span className='pr-1.5'>{data.url}</span>
                    <img 
                      src="/copy.svg" 
                      alt="copy" 
                      className='w-4 h-4 inline cursor-pointer'
                      data-value={data.url}
                      onClick={handleCopy}
                    />
                  </td>
                  <td className='text-center p-[5px] md:p-[2.5px]'>
                    <span className='pr-1.5'>{data.username}</span>
                    <img 
                      src="/copy.svg" 
                      alt="copy" 
                      className='w-4 h-4 inline cursor-pointer'
                      data-value={data.username}
                      onClick={handleCopy}
                    />
                  </td>
                  <td className='text-center p-[5px] md:p-[2.5px]'>
                    <span className='pr-1.5'>{"*".repeat(data.password.length)}</span>
                    <img 
                      src="/copy.svg" 
                      alt="copy" 
                      className='w-4 h-4 inline cursor-pointer'
                      data-value={data.password}
                      onClick={handleCopy}
                    />
                  </td>
                  <td className='flex gap-2 justify-center p-[5px] md:p-[2.5px]'>
                    <img 
                      src="/edit.svg" 
                      alt="edit" 
                      className='w-5 h-5 cursor-pointer align-middle'
                      data-index={i}
                      onClick={handleEdit}
                    />
                    <img 
                      src="/delete.svg" 
                      alt="delete" 
                      className='w-5 h-5 cursor-pointer'
                      data-index={i}
                      onClick={handleDelete}
                    />
                  </td>
                </tr> 
                ))}     
              </tbody>
            </table>}
      </div>
    </main>
  )
}

export default Hero

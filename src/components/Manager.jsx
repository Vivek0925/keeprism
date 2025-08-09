import React, { use, useState } from 'react'
import { useRef , useEffect} from 'react'

const Manager = () => {
    const ref = useRef(null);
    const passwordRef = useRef(null);
    const [form, setform] = useState({site : "",username: "", password : ""})
    const [passwordArray, setpasswordArray] = useState([])

useEffect(() => {
 let passwords = localStorage.getItem("passwords");
 if(passwords){
  setpasswordArray(JSON.parse(passwords));
 }
}, [])

    const showPassword = () => {
      passwordRef.current.type = "text"
      if(ref.current.src.includes("eyecross.png")){
        ref.current.src = "eye.png";
        passwordRef.current.type = "password";
      }
      else{
        ref.current.src = "eyecross.png";
        passwordRef.current.type = "text";
      }
    }

    const savePassword = () => {
      console.log(form)
      setpasswordArray([...passwordArray, form]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
      console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
      setform({...form, [e.target.name]: e.target.value})
    }
    
    
  return (
    <div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-purple-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-600 opacity-20 blur-[100px]"></div></div>
          
          <div className=" mx-auto max-w-3xl">
            <h1 className='text-3xl text-center font-bold p-4'>
                  <span className='text-blue-800'>&lt;</span>
                  Kee
                  <span className='text-blue-800'>Prism/&gt;</span>
            </h1>

            <p className='text-center text-blue-800'>Manage your passwords efficiently with KeePrism</p>

          <div className="text-white flex flex-col p-6 items-center ">

          <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full text-black  bg-white border border-purple-600 w-full p-4 py-1' type="text" name='site' />
            <div className='flex w-full gap-5 p-6'>
                <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full text-black w-full bg-white border border-purple-600 p-4 py-1' type="text" name='username' id='' />
                <div className="relative">

              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full text-black w-[240px] bg-white border border-purple-600 p-4 py-1' type="password" name='password' />
                <span className='absolute top-2.5 left-53  text-black' onClick={showPassword}>
                    <img ref={ref} width={15} src="eye.png" alt="eye" />
                </span>
                </div>
            </div>
            <button onClick={savePassword} className='text-black flex justify-center items-center gap-1 bg-purple-300 hover:bg-purple-400 border border-purple-500  rounded-full p-1 w-1/3'>
                      <lord-icon
                          src="https://cdn.lordicon.com/sbnjyzil.json"
                          trigger="hover">
                      </lord-icon>
                Add Password</button>
          </div>

          <div className="passwords">
            <h2 className='font-bold , w-full py-3 text-2xl'>Your Passwords</h2>
            {passwordArray.length === 0 && <div>No passwords saved</div>}
            {passwordArray.length != 0 &&

            <table className="table-auto w-full rounded-xl overflow-hidden mb-10">
              <thead className='bg-purple-600 text-white'>
                <tr>
                  <th className='py-2'>Site</th>
                  <th className='py-2'>Username</th>
                  <th className='py-2'>Password</th>
                  <th className='py-2'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-purple-200'>
                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className='py-2 border border-purple-300 text-center'>
                      <div className='flex items-center justify-center '>
                        <a href={item.site} target='_blank'>{item.site}</a>
                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover" >
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className='py-2 border border-purple-300 text-center'>
                      <div className='flex items-center justify-center '>
                        <span>{item.username}</span>
                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover" >
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className='py-2 border border-purple-300 text-center'>
                      <div className='flex items-center justify-center '>
                        <span>{item.password}</span>
                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover" >
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className='justify-center py-2 border border-purple-300 text-center'>
                      <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                          style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                      </span>
                      <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                      </span>
                    </td>
                  </tr>

                })}
              </tbody>
            </table>}
          </div>
          </div>
      
    </div>
  )
}

export default Manager

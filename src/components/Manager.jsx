import React, { use, useState } from 'react'
import { useRef , useEffect} from 'react'

const Manager = () => {
    const ref = useRef(null);
    const [form, setform] = useState({site : "",username: "", password : ""})
    const [passwordArray, setpasswordArray] = useState([])

useEffect(() => {
 let passwords = localStorage.getItem("passwords");
 if(passwords){
  setpasswordArray(JSON.parse(passwords));
 }
}, [])

    const showPassword = () => {
      if(ref.current.src.includes("eyecross.png")){
        ref.current.src = "eye.png";
      }
      else{
        ref.current.src = "eyecross.png";
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

              <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full text-black w-[240px] bg-white border border-purple-600 p-4 py-1' type="text" name='password' />
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

        <table className="table-auto py-4 w-full rounded-lg overflow-hidden">
          <thead className='bg-purple-600 text-white'>
            <tr >
              <th className='py-2'>Website</th>
              <th className='py-2'>Username</th>
              <th className='py-2'>Password</th>
            </tr>
          </thead>
          <tbody className='bg-purple-200'>
            {passwordArray.map((item, index) => (
              <tr key={index}>
                <td className='text-center py-1 border border-purple-200'><a href={item.site} target='_blank'>{item.site}</a></td>
                <td className='text-center py-1 border border-purple-200'>{item.username}</td>
                <td className='text-center py-1 border border-purple-200'>{item.password}</td>
              </tr>
            ))}
           
           
          </tbody>
        </table>
        }
          </div>
          </div>
      
    </div>
  )
}

export default Manager

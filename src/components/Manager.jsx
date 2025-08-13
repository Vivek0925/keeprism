import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef(null);
  const passwordRef = useRef(null);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("eyecross.png")) {
      ref.current.src = "eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "eyecross.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      const newPassword = { ...form, id: uuidv4() };
      const updatedArray = [...passwordArray, newPassword];
      setPasswordArray(updatedArray);
      localStorage.setItem("passwords", JSON.stringify(updatedArray));
      setForm({ site: "", username: "", password: "" });
      toast.success('Password saved!', { theme: "dark" });
    } else {
      toast.error('Error: Password not saved!', { theme: "light" });
    }
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password?");
    if (c) {
      const updatedArray = passwordArray.filter(item => item.id !== id);
      setPasswordArray(updatedArray);
      localStorage.setItem("passwords", JSON.stringify(updatedArray));
      toast.info('Password Deleted!', { theme: "light" });
    }
  };

  const editPassword = (id) => {
    setForm(passwordArray.filter(i => i.id === id)[0]);
    setPasswordArray(passwordArray.filter(item => item.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast('Copied to clipboard!', { theme: "light" });
  };

  return (
    <div className="relative min-h-screen">
      <ToastContainer />

      {/* Background effect */}
     
        {/* Background Effect */}
        <div className="absolute inset-0 -z-10 bg-purple-100 
    bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
    linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
    bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 m-auto 
      h-[310px] w-[310px] rounded-full bg-fuchsia-600 opacity-20 blur-[100px]"></div>
        </div>

      <div className="p-2 md:p-6 min-h-[88.2vh] mx-auto max-w-3xl">
        {/* Heading */}
        <h1 className='text-xl md:text-3xl text-center font-bold p-4'>
          <span className='text-blue-800'>&lt;</span>
          Kee
          <span className='text-blue-800'>Prism/&gt;</span>
        </h1>
        <p className='text-center text-blue-800 mb-4'>Manage your passwords efficiently with KeePrism</p>

        {/* Form */}
        <div className="text-white flex flex-col p-4 items-center gap-4">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder='Enter Website URL'
            className='rounded-full text-black bg-white border border-purple-600 w-full p-3'
            type="text"
            name='site'
          />

          <div className='flex flex-col md:flex-row w-full gap-4'>
            <input
              value={form.username}
              onChange={handleChange}
              placeholder='Enter Username'
              className='rounded-full text-black w-full bg-white border border-purple-600 p-3'
              type="text"
              name='username'
            />
            <div className="relative w-full md:w-[240px]">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder='Enter Password'
                className='rounded-full text-black w-full bg-white border border-purple-600 p-3'
                type="password"
                name='password'
              />
              <span
                className='absolute top-3 right-3 text-black cursor-pointer'
                onClick={showPassword}>
                <img ref={ref} width={18} src="eye.png" alt="eye" />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className='text-black flex justify-center items-center gap-1 
            bg-purple-300 hover:bg-purple-400 border border-purple-500 
            rounded-full p-2 w-full md:w-1/3'>
            <lord-icon src="https://cdn.lordicon.com/sbnjyzil.json" trigger="hover"></lord-icon>
            Save
          </button>
        </div>

        {/* Password Table */}
        <div className="passwords mt-6">
          <h2 className='font-bold w-full py-3 text-lg md:text-2xl'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords saved</div>}

          {passwordArray.length !== 0 && (
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full rounded-xl overflow-hidden mb-10">
                <thead className='bg-purple-600 text-white'>
                  <tr>
                    <th className='py-2 px-2'>Site</th>
                    <th className='py-2 px-2'>Username</th>
                    <th className='py-2 px-2'>Password</th>
                    <th className='py-2 px-2'>Actions</th>
                  </tr>
                </thead>
                <tbody className='bg-purple-200'>
                  {passwordArray.map((item, index) => (
                    <tr key={index}>
                      <td className='py-2 px-2 border border-purple-300 text-center'>
                        <div className='flex items-center justify-center gap-1'>
                          <a href={item.site} target='_blank' rel='noreferrer'>{item.site}</a>
                          <div className='cursor-pointer' onClick={() => copyText(item.site)}>
                            <lord-icon
                              style={{ width: "25px", height: "25px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover">
                            </lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className='py-2 px-2 border border-purple-300 text-center'>
                        <div className='flex items-center justify-center gap-1'>
                          <span>{item.username}</span>
                          <div className='cursor-pointer' onClick={() => copyText(item.username)}>
                            <lord-icon
                              style={{ width: "25px", height: "25px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover">
                            </lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className='py-2 px-2 border border-purple-300 text-center'>
                        <div className='flex items-center justify-center gap-1'>
                          <span>{item.password}</span>
                          <div className='cursor-pointer' onClick={() => copyText(item.password)}>
                            <lord-icon
                              style={{ width: "25px", height: "25px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover">
                            </lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className='py-2 px-2 border border-purple-300 text-center'>
                        <span className='cursor-pointer mx-1' onClick={() => editPassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}>
                          </lord-icon>
                        </span>
                        <span className='cursor-pointer mx-1' onClick={() => deletePassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}>
                          </lord-icon>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;

import React from 'react'

const ContactForm = () => {
    return ( 
        <div className='container mx-auto my-20 w-full xl:w-1/3 md:w-1/2 border border-primary bg-white'>
            <div className='p-5 space-y-5 shadow-xl'>
                <form>
                    <div className='grid grid-cols-2 gap-5'>
                        <input 
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500'
                            type='text'
                            placeholder='Nombre'
                            autoComplete='off'
                        />
                        <input 
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500'
                            type='text'
                            placeholder='Apellido'
                            autoComplete='off'
                        />
                        <input 
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2'
                            type='text'
                            placeholder='Email'
                            autoComplete='off'
                        />
                        <input 
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2'
                            type='text'
                            placeholder='Teléfono'
                            autoComplete='off'
                        />
                        <textarea
                            cols='10'
                            rows='5'
                            placeholder='Escribe tu mensaje'
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 resize-none'
                            autoComplete='off'
                        ></textarea>
                    </div>
                    <input 
                        type='submit'
                        className='focus:outline-none mt-5 bg-primary px-4 py-2 text-white font-bold w-full cursor-pointer hover:bg-primary-darker'
                        value='Enviar Mensaje' 
                    />
                </form>

            </div>
            {/* <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' method="post" action="#">
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Nombre
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type="text" name="name" id="name" 
                        />
                    </label>
                </div>
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
            </form> */}

        </div>
     );
}
 
export default ContactForm;
const Contact = () => {
    return (
      <section id="contact" className="py-20 text-center mt-32">

      <div className="max-w-md mx-auto bg-gray-700 bg-opacity-80 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <form 
          action="https://formsubmit.co/benjamin.pozin@gmail.com"
          method = "POST"
          className="mt-10 space-y-4 max-w-md mx-auto"
        >

          <input 
            type="text" 
            name = "name"
            placeholder="Full Name" 
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white" 
          />

          <input  
            type="email"
            name = "email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white" 
          />

          <textarea 
            name = "message"
            placeholder="Your Message" 
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            ></textarea>
            
          <input type="hidden" name="_captcha" value="false" />
          {/* <input type="hidden" name="_next" value="http://localhost:5173/#contact"/> */}

          <button type="submit" className="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-md">
            Send
          </button>
        </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  
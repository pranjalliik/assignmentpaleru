
function Footer() {
  return (
    <div className="bg-blue-600 text-white py-8 px-4 mt-10">
    <div className="container mx-auto grid gap-8 md:grid-cols-3">
      {/* Left Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Paleru Technologies Pvt. Ltd.</h1>
        <p>Kavitha Kunj, Kalbavi road,</p>
        <p>Kottara, Mangalore, India.</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-icons text-lg">email</span>
            <span>karthik@praccel.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons text-lg">whatsapp</span>
            <span>+91 8951621660</span>
          </div>
        </div>
      </div>
  
      {/* Center Section */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Quick Links</h2>
        <ul className="space-y-1">
          <li>Home</li>
          <li>For Schools</li>
          <li>Performance</li>
          <li>Register</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
  
      {/* Right Section */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Follow Us</h2>
        <ul className="space-y-1">
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  
    {/* Bottom Section */}
    <div className="text-center mt-8 text-sm">
      © Paleru Technologies Pvt. Ltd. 2024. All rights reserved.
    </div>
  </div>
  
  )
}

export default Footer
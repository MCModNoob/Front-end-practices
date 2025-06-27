import Image from "next/image";
import qr_code from "../component/images/image_qr_code.png"

export default function Home() {
  return (
    <div className="bg-blue-400 min-h-screen flex justify-center items-center px-4 py-8">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm w-full text-center">
        {/* QR Code placeholder */}
        <div className="bg-blue-500 rounded-lg mb-6 h-64 w-full flex items-center justify-center">
          
            <Image 
              src={qr_code}
              alt="qr code image"
              
              className="w-full h-full object-cover"
            />
          
        </div>
        
        {/* Main heading */}
        <h1 className="text-slate-900 text-xl font-bold mb-4 leading-tight">
          Improve your front-end skills by building projects
        </h1>
        
        {/* Subtext */}
        <p className="text-slate-500 text-sm leading-relaxed">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}
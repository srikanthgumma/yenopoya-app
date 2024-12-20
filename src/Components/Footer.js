import React from 'react'
import { TbArrowBigUpFilled } from "react-icons/tb"

const Footer = ({ nav }) => {
  return (
    <section className=' text-white m-0 w-full max-w-full bg-white'>
      {nav ? <a href="#home"><div className='hover:bg-[#000dff] w-14 h-14 fixed right-10 bottom-10 text-2xl flex justify-center items-center rounded-full cursor-pointer bg-blue-900 '><TbArrowBigUpFilled /></div></a> : "none"}
      <footer>
        <div className=" py-4 text-gray-400">
          <div className="container px-4 mx-auto">
            <div className="my-10 flex flex-wrap justify-between items-center">
              <div className="px-4 my-6 w-full sm:w-auto">
                <ul className="leading-2  text-2xl flex  flex-col gap-3">
                  <li><a href="#" className="hover:text-black font-sans">About Us</a></li>
                  <li><a href="#" className="hover:text-black font-sans">Message from Director/Principal</a></li>
                  <li><a href="#" className="hover:text-black font-sans">Infrastructure & Facilities</a></li>
                  <li><a href="#" className="hover:text-black font-sans">Faculty & Staff</a></li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto">
                <ul className="leading-8 text-2xl flex  flex-col gap-3">
                  <li><a href="#" className="hover:text-black font-sans ">Curriculum</a></li>
                  <li><a href="#" className="hover:text-black font-sans ">Learning Environment</a></li>
                  <li><a href="#" className="hover:text-black font-sans">Hall of Fame </a></li>
                  <li><a href="#" className="hover:text-black font-sans">Fee Struture</a></li>
                </ul>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto">
                <ul className="leading-8 text-2xl flex  flex-col gap-3">
                  <li><a href="#" className="hover:text-black font-sans ">Announcements</a></li>
                  <li><a href="#" className="hover:text-black font-sans ">Admission notice</a></li>
                  <li><a href="#" className="hover:text-black font-sans">Parent's Speak </a></li>
                  <li><a href="#" className="hover:text-black font-sans">Transfer Certificate</a></li>
                </ul>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto ">

                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-3 hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-3 hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>

                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-white py-4 text-black font-sans text-center my-8 text-xl text-gray-500">
            Copyright © 2020 The Yenopoya World All rights reserved
        </div>
      </footer>
    </section>
  )
}

export default Footer
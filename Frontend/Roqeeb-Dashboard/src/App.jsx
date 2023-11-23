import profile from '../src/assets/profile.jpg'
import heartRate from '../src/assets/download (3).png'
export default function App() {
  return (
    <>
      <div className="flex gap-5 ">
        <div className="w-[15%] border border-gray-400 h-screen overflow-y-scroll ">
          <div className='py-4 border-b border-gray-400'>
            <div className='flex justify-center'>
              <img src={profile} className='rounded-full h-[80px] w-[80px]' />
            </div>
            <div className="text-center">
              <p className="text-base font-bold">Agba Teslim</p>
              <span className="text-xs text-gray-700">18 jul 1963, years</span>
              <p className="text-sm font-bold">Lagos, Nigeria</p>
            </div>
          </div>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Dashboard</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Favourites</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Dependant</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Message</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Account</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Orders</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Add Medical Records</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Medical Details</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Profile Settings</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 border-b border-gray-400'>
              <span className='text-sm font-medium'>Change Password</span>
            </div>
          </a>
          <a href=''>
            <div className='p-3 '>
              <span className='text-sm font-medium'>Log Out</span>
            </div>
          </a>


        </div>
        <div className="grow py-3 px-10 h-screen overflow-y-scroll ">
          <div className='h-[30%] grid grid-cols-4 mb-6 gap-4 text-center'>
            <div className='h-full px-2 py-3 border border-gray-400 rounded-xl'>
              <div className='flex justify-center'>
                <img src={heartRate} />

              </div>
              <div className='mt-3'>
                <span className='font-bold'>Heart Rate</span>
              </div>
              <div className='mt-3'>
                <span className='font-bold'>12<sub>bpm</sub></span>
              </div>

            </div>

            <div className='h-full px-2 py-3 border border-gray-400 rounded-xl'>
              <div className='flex justify-center'>
                <img src={heartRate} />

              </div>
              <div className='mt-3'>
                <span className='font-bold'>Heart Rate</span>
              </div>
              <div className='mt-3'>
                <span className='font-bold'>12<sub>bpm</sub></span>
              </div>

            </div>

            <div className='h-full px-2 py-3 border border-gray-400 rounded-xl'>
              <div className='flex justify-center'>
                <img src={heartRate} />

              </div>
              <div className='mt-3'>
                <span className='font-bold'>Heart Rate</span>
              </div>
              <div className='mt-3'>
                <span className='font-bold'>12<sub>bpm</sub></span>
              </div>

            </div>

            <div className='h-full px-2 py-3 border border-gray-400 rounded-xl'>
              <div className='flex justify-center'>
                <img src={heartRate} />

              </div>
              <div className='mt-3'>
                <span className='font-bold'>Heart Rate</span>
              </div>
              <div className='mt-3'>
                <span className='font-bold'>12<sub>bpm</sub></span>
              </div>

            </div>


          </div>

          <div className='h-[30%] grid border rounded-xl border-gray-400 text-white py-4 px-2 grid-cols-4 mb-6 gap-4 text-center'>
            <div className='h-full px-2 py-3 bg-blue-500  rounded-xl'>
              <div className='mt-3'>
                <span className='font-bold'>Status</span>
              </div>
              <div className='flex justify-center'>
                {/* <img src={heartRate} /> */}

              </div>

              <div className='mt-3'>
                <span className='font-bold'>Last Update BD</span>
              </div>

            </div>

            <div className='h-full px-2 py-3 bg-red-500  rounded-xl'>
              <div className='mt-3'>
                <span className='font-bold'>Status</span>
              </div>
              <div className='flex justify-center'>


              </div>

              <div className='mt-3'>
                <span className='font-bold'>Last Update BD</span>
              </div>

            </div>
            <div className='h-full px-2 py-3 bg-yellow-500  rounded-xl'>
              <div className='mt-3'>
                <span className='font-bold'>Status</span>
              </div>
              <div className='flex justify-center'>


              </div>

              <div className='mt-3'>
                <span className='font-bold'>Last Update BD</span>
              </div>

            </div>

            <div className='h-full px-2 py-3 bg-blue-300  rounded-xl'>
              <div className='mt-3'>
                <span className='font-bold'>Status</span>
              </div>
              <div className='flex justify-center'>


              </div>

              <div className='mt-3'>
                <span className='font-bold'>Last Update BD</span>
              </div>

            </div>


          </div>

          <div className=' h-[40%] overflow-y-scroll w-full  border-gray-400 border rounded-xl '>
            <div>
              <table className='w-full text-start '>
                <tr className='py-4  text-start '>
                  <td className='font-bold px-2 text-sm'>Doctor</td>
                  <td className='font-bold px-2 text-sm'>App Date</td>
                  <td className='font-bold px-2 text-sm'>Booking Date</td>
                  <td className='font-bold px-2 text-sm'>Amount</td>
                  <td className='font-bold px-2 text-sm'>Follow Up</td>
                  <td className='font-bold px-2 text-sm'>Status</td>
                  <td className='font-bold px-2 text-sm'>Action</td>
                </tr>
                <tr className='pb-4 border-b border-gray-400'>
                  <td className='py-4 px-4 flex gap-2'>
                    <img src={profile} className='w-[30px] h-[30px] rounded-full' />
                    <div className='text-xs'>
                      <p>Dr Raji Roqeeb</p>
                      <span>Surgeon</span>
                    </div>
                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>
                    <span className='text-blue-500'>10:00 AM</span>
                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>

                  </td>
                  <td className='text-xs'>
                    <p>$100</p>

                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>

                  </td>
                  <td className='text-xs'>
                    <p className='px-1 py-2 text-center bg-green-300'>Confirm</p>

                  </td>
                  <td className='text-xs'>
                    <p className='px-1 py-2 text-center bg-blue-300'>Print</p>

                  </td>

                </tr>

                <tr className='pb-4 border-b border-gray-400'>
                  <td className='py-4 px-4 flex gap-2'>
                    <img src={profile} className='w-[30px] h-[30px] rounded-full' />
                    <div className='text-xs'>
                      <p>Dr Raji Roqeeb</p>
                      <span>Surgeon</span>
                    </div>
                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>
                    <span className='text-blue-500'>10:00 AM</span>
                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>

                  </td>
                  <td className='text-xs'>
                    <p>$100</p>

                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>

                  </td>
                  <td className='text-xs'>
                    <p className='px-1 py-2 text-center bg-green-300'>Confirm</p>

                  </td>
                  <td className='text-xs'>
                    <p className='px-1 py-2 text-center bg-blue-300'>Print</p>

                  </td>

                </tr>

                <tr className='pb-4 border-b border-gray-400'>
                  <td className='py-4 px-4 flex gap-2'>
                    <img src={profile} className='w-[30px] h-[30px] rounded-full' />
                    <div className='text-xs'>
                      <p>Dr Raji Roqeeb</p>
                      <span>Surgeon</span>
                    </div>
                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>
                    <span className='text-blue-500'>10:00 AM</span>
                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>

                  </td>
                  <td className='text-xs'>
                    <p>$100</p>

                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>

                  </td>
                  <td className='text-xs'>
                    <p className='px-1 py-2 text-center bg-green-300'>Confirm</p>

                  </td>
                  <td className='text-xs'>
                    <p className='px-1 py-2 text-center bg-blue-300'>Print</p>

                  </td>

                </tr>

                <tr className='pb-4 border-b border-gray-400'>
                  <td className='py-4 px-4 flex gap-2'>
                    <img src={profile} className='w-[30px] h-[30px] rounded-full' />
                    <div className='text-xs'>
                      <p>Dr Raji Roqeeb</p>
                      <span>Surgeon</span>
                    </div>
                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>
                    <span className='text-blue-500'>10:00 AM</span>
                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>

                  </td>
                  <td className='text-xs'>
                    <p>$100</p>

                  </td>
                  <td className='text-xs'>
                    <p>14 Nov 2023</p>

                  </td>
                  <td className='text-xs'>
                    <p className='px-1 py-2 text-center bg-green-300'>Confirm</p>

                  </td>
                  <td className='text-xs'>
                    <p className='px-1 py-2 text-center bg-blue-300'>Print</p>

                  </td>

                </tr>
              </table>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
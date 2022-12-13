import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='bgDark footer'>
         <div className="container-md py-md-3 py-5 d-flex flex-column flex-md-row align-items-center justify-content-md-between">
         <div className='logoDiv d-md-flex align-items-center justify-content-md-between justify-content-lg-start'>
             <div>
              <Link to=''>
                  <svg width="135" height="38" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#fbfcfe" fillRule="evenodd"><path d="M50.544 33.934v-7.84h.064a5.36 5.36 0 002.128 1.84c.864.416 1.808.624 2.832.624 1.216 0 2.277-.235 3.184-.704a6.738 6.738 0 002.272-1.888 8.147 8.147 0 001.36-2.72 11.37 11.37 0 00.448-3.2c0-1.173-.15-2.299-.448-3.376-.299-1.077-.757-2.021-1.376-2.832a6.937 6.937 0 00-2.336-1.952c-.939-.49-2.059-.736-3.36-.736-1.024 0-1.963.203-2.816.608-.853.405-1.557 1.056-2.112 1.952h-.064v-2.112H46v22.336h4.544zm3.808-8.768c-.725 0-1.344-.15-1.856-.448a3.595 3.595 0 01-1.232-1.168 5.044 5.044 0 01-.672-1.68 9.192 9.192 0 01-.208-1.952c0-.683.064-1.344.192-1.984a4.98 4.98 0 01.656-1.696c.31-.49.715-.89 1.216-1.2.501-.31 1.125-.464 1.872-.464.725 0 1.339.155 1.84.464.501.31.912.715 1.232 1.216.32.501.55 1.072.688 1.712.139.64.208 1.29.208 1.952 0 .661-.064 1.312-.192 1.952-.128.64-.347 1.2-.656 1.68-.31.48-.715.87-1.216 1.168-.501.299-1.125.448-1.872.448zm15.882 3.392c1.024 0 2.027-.15 3.008-.448a5.921 5.921 0 002.56-1.568 6.52 6.52 0 00.32 1.6h4.608c-.213-.341-.363-.853-.448-1.536a17.288 17.288 0 01-.128-2.144v-8.608c0-1.003-.224-1.808-.672-2.416a4.603 4.603 0 00-1.728-1.424 7.733 7.733 0 00-2.336-.688 18.543 18.543 0 00-2.528-.176c-.917 0-1.83.09-2.736.272a7.809 7.809 0 00-2.448.912 5.448 5.448 0 00-1.792 1.696c-.47.704-.736 1.59-.8 2.656h4.544c.085-.896.384-1.536.896-1.92.512-.384 1.216-.576 2.112-.576.405 0 .784.027 1.136.08.352.053.661.16.928.32s.48.384.64.672c.16.288.24.677.24 1.168.021.47-.117.827-.416 1.072-.299.245-.704.432-1.216.56-.512.128-1.099.224-1.76.288-.661.064-1.333.15-2.016.256-.683.107-1.36.25-2.032.432a5.735 5.735 0 00-1.792.816c-.523.363-.95.848-1.28 1.456-.33.608-.496 1.381-.496 2.32 0 .853.144 1.59.432 2.208a4.17 4.17 0 001.2 1.536c.512.405 1.11.704 1.792.896a8.127 8.127 0 002.208.288zm1.696-3.008c-.363 0-.715-.032-1.056-.096a2.566 2.566 0 01-.896-.336 1.717 1.717 0 01-.608-.656c-.15-.277-.224-.619-.224-1.024 0-.427.075-.779.224-1.056.15-.277.347-.507.592-.688a2.98 2.98 0 01.864-.432c.33-.107.667-.192 1.008-.256.363-.064.725-.117 1.088-.16.363-.043.71-.096 1.04-.16.33-.064.64-.144.928-.24.288-.096.528-.23.72-.4v1.696c0 .256-.027.597-.08 1.024a3.428 3.428 0 01-.432 1.264c-.235.416-.597.773-1.088 1.072-.49.299-1.184.448-2.08.448zm13.962 8.384c1.557 0 2.773-.288 3.648-.864.874-.576 1.557-1.536 2.048-2.88L98.5 11.598h-4.704L90.18 22.926h-.064l-3.744-11.328H81.54l5.792 15.52c.128.32.192.661.192 1.024 0 .49-.144.939-.432 1.344-.288.405-.731.64-1.328.704-.448.021-.896.01-1.344-.032-.448-.043-.886-.085-1.312-.128v3.744c.469.043.933.08 1.392.112.458.032.922.048 1.392.048zm18.698-5.408c.789 0 1.514-.096 2.176-.288a6.581 6.581 0 001.776-.8c.522-.341.965-.73 1.328-1.168.362-.437.64-.901.832-1.392h.064v.864c0 .341.026.656.08.944.053.288.154.539.304.752.149.213.368.384.656.512.288.128.677.192 1.168.192.34 0 .672-.043.992-.128V26.99a5.835 5.835 0 01-.896.096c-.278 0-.491-.059-.64-.176a.961.961 0 01-.32-.464 2.357 2.357 0 01-.112-.64c-.011-.235-.016-.47-.016-.704v-9.568c0-1.259-.454-2.277-1.36-3.056-.907-.779-2.352-1.168-4.336-1.168-1.984 0-3.515.453-4.592 1.36-1.078.907-1.66 2.267-1.744 4.08h1.216c.085-1.472.58-2.57 1.488-3.296.906-.725 2.096-1.088 3.568-1.088.832 0 1.536.085 2.112.256.576.17 1.045.405 1.408.704.362.299.629.64.8 1.024.17.384.256.8.256 1.248 0 .576-.032 1.056-.096 1.44a1.64 1.64 0 01-.48.944c-.256.245-.635.437-1.136.576-.502.139-1.19.24-2.064.304l-1.888.16c-.662.064-1.35.17-2.064.32-.715.15-1.366.4-1.952.752a4.367 4.367 0 00-1.456 1.44c-.384.608-.576 1.392-.576 2.352 0 1.579.48 2.747 1.44 3.504.96.757 2.314 1.136 4.064 1.136zm.032-1.056c-1.344 0-2.4-.293-3.168-.88-.768-.587-1.152-1.488-1.152-2.704 0-.768.149-1.392.448-1.872.298-.48.688-.859 1.168-1.136a5.213 5.213 0 011.616-.592 20.778 20.778 0 011.792-.272l2.048-.192a16.93 16.93 0 002.032-.288c.608-.128 1.06-.373 1.36-.736v3.072c0 .213-.06.624-.176 1.232-.118.608-.39 1.237-.816 1.888-.427.65-1.046 1.227-1.856 1.728-.811.501-1.91.752-3.296.752zm12.49 6.56v-9.312h.063c.491 1.344 1.27 2.315 2.336 2.912 1.067.597 2.283.896 3.648.896 1.26 0 2.352-.213 3.28-.64a6.254 6.254 0 002.304-1.776c.608-.757 1.062-1.659 1.36-2.704.3-1.045.448-2.197.448-3.456 0-1.152-.149-2.25-.448-3.296-.298-1.045-.752-1.963-1.36-2.752a6.651 6.651 0 00-2.304-1.888c-.928-.47-2.02-.704-3.28-.704-.896 0-1.69.139-2.384.416a6.39 6.39 0 00-1.776 1.04c-.49.416-.885.87-1.184 1.36-.298.49-.512.939-.64 1.344h-.064v-3.776h-1.216V34.03h1.216zm6.047-6.56c-1.152 0-2.117-.208-2.896-.624a5.008 5.008 0 01-1.856-1.664c-.458-.693-.784-1.493-.976-2.4a13.637 13.637 0 01-.288-2.832c0-.981.107-1.925.32-2.832a7.152 7.152 0 011.04-2.416 5.407 5.407 0 011.872-1.696c.768-.427 1.696-.64 2.784-.64 1.11 0 2.054.219 2.832.656a5.599 5.599 0 011.904 1.728c.491.715.854 1.525 1.088 2.432.235.907.352 1.83.352 2.768 0 1.024-.122 1.99-.368 2.896-.245.907-.618 1.701-1.12 2.384a5.487 5.487 0 01-1.92 1.632c-.778.405-1.7.608-2.768.608zm11.498-18.88V5.294h-1.216V8.59h1.216zm0 19.552V11.694h-1.216v16.448h1.216z" fillRule="nonzero"/><g><circle transform="rotate(45 19.142 5)" cx="19.142" cy="5" r="3"/><circle transform="rotate(45 26.213 12.071)" cx="26.213" cy="12.071" r="3"/><circle transform="rotate(45 33.284 19.142)" cx="33.284" cy="19.142" r="3"/><circle transform="rotate(45 12.071 12.071)" cx="12.071" cy="12.071" r="3"/><circle opacity=".5" transform="rotate(45 19.142 19.142)" cx="19.142" cy="19.142" r="3"/><circle opacity=".5" transform="rotate(45 26.213 26.213)" cx="26.213" cy="26.213" r="3"/><circle transform="rotate(45 5 19.142)" cx="5" cy="19.142" r="3"/><circle opacity=".5" transform="rotate(45 12.071 26.213)" cx="12.071" cy="26.213" r="3"/><circle opacity=".25" transform="rotate(45 19.142 33.284)" cx="19.142" cy="33.284" r="3"/>
                  </g></g>
                  </svg>
              </Link>
            </div>
            <div className='d-flex flex-column d-md-block py-4  ps-lg-5 text-center text-md-start'>
              <Link className="text-decoration-none textLightBlue p-2  py-md-0" to='/pricing'>Pricing</Link> 
              <Link className="text-decoration-none textLightBlue p-2  py-md-0" to='/about'>About</Link> 
              <Link className="text-decoration-none textLightBlue p-2 py-md-0" to='/contact'>Contact</Link> 
          </div>
         </div>
        <div className='socials'>
            <a href="https://www.facebook.com">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#fbfcfe" fillRule="nonzero"/>
              </svg>
            </a>
            <a href="https://www.twitter.com">
              <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" className='mx-3'>
              <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" fill="#FBFCFE" fillRule="nonzero"/>
              </svg>
             </a>
             <a href="https://www.linkedin.com">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z" fill="#fbfcfe" fillRule="nonzero"/>
              </svg>
             </a>
        </div>
      </div>
    </div>
  )
}

export const Icon = ({ icon }) => {
  switch (icon) {
    case 'plus': {
      return (
        <svg
          width='25'
          height='25'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75Z'
            fill='#2546A5'
          />
          <path d='M8.75 5.83337H11.25V14.1667H8.75V5.83337Z' fill='white' />
          <path d='M5.8335 8.75H14.1668V11.25H5.8335V8.75Z' fill='white' />
        </svg>
      );
    }
    case 'options': {
      return (
        <svg
          width='25'
          height='25'
          viewBox='0 0 20 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.375 0C2 0 0 2 0 4.375C0 6.75 2 8.75 4.375 8.75C6.75 8.75 8.75 6.75 8.75 4.375C8.75 2 6.75 0 4.375 0ZM4.375 7.5C2.625 7.5 1.25 6.125 1.25 4.375C1.25 2.625 2.625 1.25 4.375 1.25C6.125 1.25 7.5 2.625 7.5 4.375C7.5 6.125 6.125 7.5 4.375 7.5ZM4.375 10C2 10 0 12 0 14.375C0 16.75 2 18.75 4.375 18.75C6.75 18.75 8.75 16.75 8.75 14.375C8.75 12 6.75 10 4.375 10ZM4.375 17.5C2.625 17.5 1.25 16.125 1.25 14.375C1.25 12.625 2.625 11.25 4.375 11.25C6.125 11.25 7.5 12.625 7.5 14.375C7.5 16.125 6.125 17.5 4.375 17.5ZM10 2.5H20V6.25H10V2.5ZM10 12.5H20V16.25H10V12.5Z'
            fill='#2546A5'
          />
        </svg>
      );
    }
    case 'options-selected': {
      return (
        <svg
          width='25'
          height='25'
          viewBox='0 0 20 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.375 0C2 0 0 2 0 4.375C0 6.75 2 8.75 4.375 8.75C6.75 8.75 8.75 6.75 8.75 4.375C8.75 2 6.75 0 4.375 0ZM4.375 7.5C2.625 7.5 1.25 6.125 1.25 4.375C1.25 2.625 2.625 1.25 4.375 1.25C6.125 1.25 7.5 2.625 7.5 4.375C7.5 6.125 6.125 7.5 4.375 7.5ZM4.375 10C2 10 0 12 0 14.375C0 16.75 2 18.75 4.375 18.75C6.75 18.75 8.75 16.75 8.75 14.375C8.75 12 6.75 10 4.375 10ZM4.375 17.5C2.625 17.5 1.25 16.125 1.25 14.375C1.25 12.625 2.625 11.25 4.375 11.25C6.125 11.25 7.5 12.625 7.5 14.375C7.5 16.125 6.125 17.5 4.375 17.5ZM10 2.5H20V6.25H10V2.5ZM10 12.5H20V16.25H10V12.5Z'
            fill='white'
          />
        </svg>
      );
    }
    case 'arrow-up': {
      return (
        <svg
          width='25'
          height='25'
          viewBox='0 0 20 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 10.5L9.3077 1.5L19 10.5'
            stroke='#2546A5'
            strokeWidth='2'
          />
        </svg>
      );
    }
    case 'arrow-down': {
      return (
        <svg
          width='25'
          height='25'
          viewBox='0 0 20 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 1.5L9.3077 10.5L19 1.5'
            stroke='#e2e8f0'
            strokeWidth='2'
          />
        </svg>
      );
    }
    case 'edit': {
      return (
        <svg
          width='35'
          height='35'
          viewBox='0 0 45 45'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='8'
            y='4.00146'
            width='29'
            height='29.0014'
            rx='14.5'
            fill='#6F8DE5'
          />
          <path
            d='M28.2407 10.5293C27.9026 10.1913 27.4441 10.0015 26.9661 10.0015C26.488 10.0015 26.0295 10.1913 25.6915 10.5293L24.2086 12.0131L28.9889 16.7933L30.4717 15.3114C30.6392 15.1439 30.772 14.9452 30.8627 14.7264C30.9533 14.5076 31 14.2731 31 14.0363C31 13.7995 30.9533 13.565 30.8627 13.3462C30.772 13.1274 30.6392 12.9287 30.4717 12.7612L28.2407 10.5293ZM27.7142 18.0679L22.934 13.2877L14.9699 21.2517L14 27.0028L19.7511 26.032L27.7142 18.0679Z'
            fill='black'
          />
        </svg>
      );
    }
    case 'delete': {
      return (
        <svg
          width='35'
          height='35'
          viewBox='0 0 42 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='8' y='4' width='26' height='28' rx='13' fill='#6F8DE5' />
          <path
            d='M13 13H29M19 17V23M23 17V23M14 13L15 25C15 25.5304 15.2107 26.0391 15.5858 26.4142C15.9609 26.7893 16.4696 27 17 27H25C25.5304 27 26.0391 26.7893 26.4142 26.4142C26.7893 26.0391 27 25.5304 27 25L28 13M18 13V10C18 9.73478 18.1054 9.48043 18.2929 9.29289C18.4804 9.10536 18.7348 9 19 9H23C23.2652 9 23.5196 9.10536 23.7071 9.29289C23.8946 9.48043 24 9.73478 24 10V13'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    }
    case 'settings': {
      return (
        <svg
          width='35'
          height='35'
          viewBox='0 0 18 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.42836 1.92855V4.7857H4.7141V1.92855H0.42836ZM17.5713 4.7857V1.92855H10.4283V4.7857H17.5713ZM17.5713 11.9286V9.07148H14.7141V11.9286L17.5713 11.9286ZM6.14266 0.5V6.2143H8.99981V0.5H6.14266ZM0.42836 9.07145V11.9286H8.99981V9.07148L0.42836 9.07145ZM10.4284 7.64285V13.3571H13.2855V7.64285H10.4284ZM17.5713 19.0715V16.2143H8.99981V19.0715H17.5713ZM7.57129 14.7857H4.71414V20.5H7.57129V14.7857ZM0.428398 16.2143V19.0715H3.28555V16.2143H0.428398Z'
            fill='#2546A5'
          />
        </svg>
      );
    }
    case 'settings-selected': {
      return (
        <svg
          width='35'
          height='35'
          viewBox='0 0 18 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.42836 1.92855V4.7857H4.7141V1.92855H0.42836ZM17.5713 4.7857V1.92855H10.4283V4.7857H17.5713ZM17.5713 11.9286V9.07148H14.7141V11.9286L17.5713 11.9286ZM6.14266 0.5V6.2143H8.99981V0.5H6.14266ZM0.42836 9.07145V11.9286H8.99981V9.07148L0.42836 9.07145ZM10.4284 7.64285V13.3571H13.2855V7.64285H10.4284ZM17.5713 19.0715V16.2143H8.99981V19.0715H17.5713ZM7.57129 14.7857H4.71414V20.5H7.57129V14.7857ZM0.428398 16.2143V19.0715H3.28555V16.2143H0.428398Z'
            fill='white'
          />
        </svg>
      );
    }
  }
};
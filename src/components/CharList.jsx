export default function CharList({ props }) {
  return (
    <div className="char-list">
      <div className="bordered-char-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="13"
          viewBox="0 0 10 13"
          fill="none"
        >
          <path d="M0 1H9.50722" stroke="#12724F" strokeWidth="0.462357" />
          <path d="M0 12H9.50722" stroke="#12724F" strokeWidth="0.462357" />
          <path
            d="M4.10947 8.51486V4.48524H5.08042V8.51486H6.41548L4.59495 10.4825L2.77441 8.51486H4.10947ZM4.59495 2.51758L6.41548 4.48524H2.77441L4.59495 2.51758Z"
            fill="#12724F"
          />
        </svg>
        {props.size.height}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
        >
          <path
            d="M0.253906 10.2539L0.253906 0.746683"
            stroke="#12724F"
            strokeWidth="0.462357"
          />
          <path
            d="M11.2539 10.2539L11.2539 0.746683"
            stroke="#12724F"
            strokeWidth="0.462357"
          />
          <path
            d="M7.76877 6.14468L3.73914 6.14468V5.17373H7.76877V3.83867L9.73642 5.6592L7.76877 7.47974V6.14468ZM1.77148 5.6592L3.73914 3.83867L3.73914 7.47974L1.77148 5.6592Z"
            fill="#12724F"
          />
        </svg>
        {props.size.width}
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <g clipPath="url(#clip0_53_460)">
            <path
              d="M13.5 7.35008L7.4 10.1601C7.26972 10.2195 7.12819 10.2503 6.985 10.2503C6.84181 10.2503 6.70028 10.2195 6.57 10.1601L0.5 7.35008M13.5 10.6001L7.4 13.4101C7.26972 13.4695 7.12819 13.5003 6.985 13.5003C6.84181 13.5003 6.70028 13.4695 6.57 13.4101L0.5 10.6001M7.47 6.90008C7.32168 6.96449 7.1617 6.99772 7 6.99772C6.8383 6.99772 6.67832 6.96449 6.53 6.90008L0.83 4.26008C0.737441 4.2134 0.659658 4.14194 0.605312 4.05366C0.550966 3.96538 0.52219 3.86375 0.52219 3.76008C0.52219 3.65642 0.550966 3.55479 0.605312 3.46651C0.659658 3.37823 0.737441 3.30677 0.83 3.26008L6.53 0.600083C6.67832 0.535676 6.8383 0.502441 7 0.502441C7.1617 0.502441 7.32168 0.535676 7.47 0.600083L13.17 3.24008C13.2626 3.28677 13.3403 3.35823 13.3947 3.44651C13.449 3.53479 13.4778 3.63642 13.4778 3.74008C13.4778 3.84375 13.449 3.94538 13.3947 4.03366C13.3403 4.12194 13.2626 4.1934 13.17 4.24008L7.47 6.90008Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_53_460">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {props.layers}
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="13"
          viewBox="0 0 15 13"
          fill="none"
        >
          <path
            d="M2 12H8C8.55228 12 9 11.5523 9 11V7C9 6.44772 8.55228 6 8 6H2C1.44772 6 1 6.44772 1 7V11C1 11.5523 1.44772 12 2 12Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 3.5H10.5C10.7652 3.5 11.0196 3.60536 11.2071 3.79289C11.3946 3.98043 11.5 4.23478 11.5 4.5V9.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 1H13C13.2652 1 13.5196 1.10536 13.7071 1.29289C13.8946 1.48043 14 1.73478 14 2V7.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {props.quantity}
      </div>
    </div>
  );
}

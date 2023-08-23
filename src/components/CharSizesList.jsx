export default function CharSizesList({ props }) {
  return (
    <div className="char-list">
      {props.map((item, index) => {
        return (
          <div key={index} className="bordered-char-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
            >
              <path
                d="M0 0.664551H8.70982"
                stroke="#12724F"
                strokeWidth="0.423578"
              />
              <path
                d="M0 10.7419H8.70982"
                stroke="#12724F"
                strokeWidth="0.423578"
              />
              <path
                d="M3.76507 7.54895V3.85731H4.65459V7.54895H5.87767L4.20983 9.35158L2.54199 7.54895H3.76507ZM4.20983 2.05469L5.87767 3.85731H2.54199L4.20983 2.05469Z"
                fill="#12724F"
              />
            </svg>
            {item.height}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
            >
              <path
                d="M1.2002 9.05835L1.2002 0.348534"
                stroke="#12724F"
                strokeWidth="0.423578"
              />
              <path
                d="M11.2773 9.05835L11.2773 0.348534"
                stroke="#12724F"
                strokeWidth="0.423578"
              />
              <path
                d="M8.08509 5.29377L4.39344 5.29377V4.40425H8.08509V3.18117L9.88771 4.84901L8.08509 6.51685V5.29377ZM2.59082 4.84901L4.39344 3.18117V6.51685L2.59082 4.84901Z"
                fill="#12724F"
              />
            </svg>
            {item.width}
          </div>
        );
      })}
    </div>
  );
}

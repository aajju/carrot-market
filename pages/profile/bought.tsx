import type { NextPage } from "next";

const Bought: NextPage = () => {
  return (
    <div>
      <div>
        <div>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div />
              <h3>Galaxy S60</h3>
              <p>$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bought;

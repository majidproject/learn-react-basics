import { useState } from "react";

function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {/* دکمه‌های تب‌ها */}
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            style={{
              margin: "5px",
              padding: "8px 16px",
              backgroundColor: active === index ? "#61dafb" : "#eee",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* محتوای تب فعال */}
      <div style={{ marginTop: "20px" }}>
        <p>{tabs[active].content}</p>
      </div>
    </div>
  );
}

export default Tabs;

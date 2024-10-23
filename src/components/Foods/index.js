"use client";

const Foods = () => {
    const foods = [
      { brand: "Royal Canin", type: "Dry Food" },
      { brand: "Sheba", type: "Wet Food" },
      { brand: "Purina", type: "Dry Food" },
      { brand: "Fancy Feast", type: "Wet Food" },
    ];
  
    const categories = foods.reduce((acc, food) => {
      acc[food.type] = acc[food.type] || [];
      acc[food.type].push(food.brand);
      return acc;
    }, {});
  
    return (
      <div>
        <h1>Cat Foods</h1>
        {Object.entries(categories).map(([type, brands], index) => (
          <div key={index}>
            <h2>{type}</h2>
            <ul>
              {brands.map((brand, idx) => (
                <li key={idx}>{brand}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default Foods;